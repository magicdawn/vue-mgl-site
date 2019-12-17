/**
 * generate doc for
 */

const tpl = `
## API

### props

| props     | type                | required | default | description       |
| --------- | ------------------- | -------- | ------- | ----------------- |
{% for p in props -%}
| {{p.name}} | {{p.type}}  | {{p.required}} | {{p.default}} | {{p.description}} |
{% endfor %}

### events

| event name  | description                   | arguments               |
| ----------- | ----------------------------- | ----------------------- |
| event name  | description                   | arguments               |
`

const njk = require('nunjucks')

njk.configure({autoescape: false})

function gen(props) {
  const propNames = Object.keys(props)
  const data = propNames.map(name => {
    const def = props[name]

    let {type, required = false, validator} = def
    let propDefault = def.default

    // e.g String
    if (typeof type === 'function') {
      type = type.name
    } else if (Array.isArray(type)) {
      type = type.map(C => C.name).join(' | ')
    }
    type = '`' + type + '`'

    // default
    if (typeof propDefault === 'function') {
      const fnContent = propDefault.toString()
      let defaultValue
      try {
        defaultValue = propDefault()
      } catch (e) {
        // noop
      }

      if (typeof defaultValue !== 'undefined') {
        propDefault = '`' + JSON.stringify(defaultValue) + '`'
      } else {
        propDefault = fnContent
      }
    } else if (propDefault || propDefault === 0 || propDefault === false) {
      propDefault = '`' + JSON.stringify(propDefault) + '`'
    }

    // required
    if (required) {
      required = '✔'
    } else {
      required = ''
    }

    return {
      name,
      type,
      required,
      default: propDefault,
      description: '',
    }
  })

  const rendered = njk.renderString(tpl, {props: data})
  return rendered
}

import {globalComponents} from 'vue-mgl'
window.globalComponents = globalComponents

let result

result = gen(globalComponents.MglMap.mixins[0].props)
console.log(result)
// window.copy(result)
