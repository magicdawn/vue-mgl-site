/**
 * generate doc for
 */

const path = require('path')
const fs = require('fs-extra')
const njk = require('nunjucks')
const ppt = require('puppeteer-core')

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
async function getBrowserProps(browserFn) {
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
  const result = await page.evaluate(browserFn)

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
}

async function main() {
  // map
  {
    // fetch
    const props = await getBrowserProps(() =>
      window.getPropsData(window.globalComponents.MglMap.mixins[0].props)
    )

    // render
    const result = njk.renderString(tplProps, {props})

    //   write
    const file = 'demo/MglMap/api-props.en-US.md'
    write({file, content: result})
    console.log('[done]: %s writed', file)
  }

  if (browser) {
    await browser.close()
  }
}

if (module === process.mainModule) {
  main()
}
