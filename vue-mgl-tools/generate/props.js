/**
 * generate doc for
 */

const path = require('path')
const fs = require('fs-extra')
const njk = require('nunjucks')
const ppt = require('puppeteer-core')
const {extname} = path
const {execSync} = require('child_process')

njk.configure({autoescape: false})

const tplProps = `
<!-- Auto generated, do not modify -->

## API

### props

| props     | type                | required | default | description       |
| --------- | ------------------- | -------- | ------- | ----------------- |
{% for p in props -%}
| {{p.name}} | {{p.type}}  | {{p.required}} | {{p.default}} | {{p.description}} |
{% endfor %}
`

const tplEvents = `
### events

| event name  | description                   | arguments               |
| ----------- | ----------------------------- | ----------------------- |
| event name  | description                   | arguments               |
`

let browser
async function evaluateInBrowser(browserFn, ...args) {
  if (!browser) {
    browser = await ppt.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      // headless: false,
    })
  }

  // new page
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/docs/getting-started/')

  // evaluate
  const result = await page.evaluate(browserFn, ...args)

  // page close
  await page.close()

  return result
}

/**
 * file = project path
 */

async function write({file, content}) {
  file = path.join(__dirname, '../../', file)
  fs.outputFileSync(file, content, 'utf8')

  if (extname(file) === '.md') {
    const configFile = __dirname + '/../../prettier.config.js'
    execSync(`prettier --config ${configFile} --write ${file}`)
  }
}

const genMap = async () => {
  // map
  {
    // fetch
    const props = await evaluateInBrowser(() =>
      window.getPropsData(window.globalComponents.MglMap.mixins[0].props)
    )

    const mapOptionsDesc = require('./map/description.js')
    for (let p of props) {
      let {name} = p
      if (name === 'mapStyle') name = 'style'
      p.description = (mapOptionsDesc[name] && mapOptionsDesc[name].desc) || ''
      p.description = p.description.replace(/\n/g, '<br />')
    }

    // render
    const result = njk.renderString(tplProps, {props})

    //   write
    const file = 'demo/MglMap/api-props.en-US.md'
    write({file, content: result})
    console.log('[done]: %s writed', file)
  }
}

const genControls = async () => {
  // controls
  {
    const controls = [
      'MglControlGroup',
      'MglNavigationControl',
      'MglGeolocateControl',
      'MglAttributionControl',
      'MglScaleControl',
      'MglFullscreenControl',
    ]

    for (let key of controls) {
      const props = await evaluateInBrowser(key => {
        return window.getPropsData(window.globalComponents[key].props)
      }, key)

      const mixinProps = await evaluateInBrowser(key => {
        const mixins = window.globalComponents[key].mixins
        const obj = mixins && mixins[0]
        const props = (obj && obj.props) || {}
        return window.getPropsData(props)
      }, key)

      const allProps = [...mixinProps, ...props]

      // render
      const result = njk.renderString(tplProps, {props: allProps})

      //   write
      const file = `demo/${key}/api-props.en-US.md`
      write({file, content: result})
      console.log('props for %s: %O', key, allProps)
      console.log('[done]: %s writed', file)
    }
  }
}

const genCustomControls = async () => {
  // controls
  const controls = ['MglCustomControl', 'MglFlyToControl', 'MglPitchControl']

  for (let key of controls) {
    const props = await evaluateInBrowser(key => {
      return window.getPropsData(window.globalComponents[key].props)
    }, key)

    // const mixinProps = await getBrowserProps(key => {
    //   const mixins = window.globalComponents[key].mixins
    //   const obj = mixins && mixins[0]
    //   const props = (obj && obj.props) || {}
    //   return window.getPropsData(props)
    // }, key)

    const allProps = [...props]

    // render
    const result = njk.renderString(tplProps, {props: allProps})

    //   write
    const file = `demo/${key}/api-props.en-US.md`
    write({file, content: result})
    console.log('props for %s: %O', key, allProps)
    console.log('[done]: %s writed', file)
  }
}

const genUI = async () => {
  // controls
  const controls = ['MglMarker', 'MglPopup']
  for (let key of controls) {
    const props = await evaluateInBrowser(key => {
      return window.getPropsData(window.globalComponents[key].props)
    }, key)

    const allProps = [...props]

    // render
    const result = njk.renderString(tplProps, {props: allProps})

    //   write
    const file = `demo/${key}/api-props.en-US.md`
    write({file, content: result})
    console.log('props for %s: %O', key, allProps)
    console.log('[done]: %s writed', file)
  }
}
const genSourceAndLayer = async () => {
  // controls
  const controls = [
    'MglSource',
    'MglLayer',
    'MglImageLayer',
    'MglVideoLayer',
    'MglRasterLayer',
    'MglPolygon',
  ]
  for (let key of controls) {
    const props = await evaluateInBrowser(key => {
      return window.getPropsData(window.globalComponents[key].props)
    }, key)

    const allProps = [...props]

    // render
    const result = njk.renderString(tplProps, {props: allProps})

    //   write
    const file = `demo/${key}/api-props.en-US.md`
    write({file, content: result})
    console.log('props for %s: %O', key, allProps)
    console.log('[done]: %s writed', file)
  }
}

const genSourceAllowedProps = async () => {
  const registry = await evaluateInBrowser(() => {
    return window.MglSourcePropKeysRegistry
  })

  const list = []
  for (let [type, props] of Object.entries(registry)) {
    props = props.map(p => '`' + p + '`')
    list.push({type, props})
  }

  const tpl = `
### Allow props for different types

{% for item in list -%}
#### type=\`{{item.type}}\`

{% for propItem in item.props -%}
  {{propItem}} {{' , ' if loop.index !== item.props.length}}
{%- endfor  %}

{% endfor %}
`
  {
    /* <span style='margin-right: 10px;'>{{propItem}}</span> */
  }

  const file = './demo/MglSource/api-allowed-props.md'
  const content = njk.renderString(tpl, {list})
  write({file, content})
  console.log('[done]: % writed', file)
}

async function main() {
  // await genMap()

  // await genControls()

  // await genCustomControls()

  // await genUI()

  // await genSourceAndLayer()

  await genSourceAllowedProps()

  if (browser) {
    await browser.close()
  }
}

if (module === process.mainModule) {
  main()
}
