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
async function getBrowserProps(browserFn, ...args) {
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

async function main() {
  // map
  {
    // fetch
    const props = await getBrowserProps(() =>
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
      const props = await getBrowserProps(key => {
        return window.getPropsData(window.globalComponents[key].props)
      }, key)

      const mixinProps = await getBrowserProps(key => {
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

  if (browser) {
    await browser.close()
  }
}

if (module === process.mainModule) {
  main()
}
