import {globalComponents} from 'vue-mgl'
window.globalComponents = globalComponents

import {propKeysRegistry} from 'vue-mgl/src/component/MglSource'
window.MglSourcePropKeysRegistry = propKeysRegistry

global.getPropsData = function(props) {
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
        defaultValue = propDefault.call({})
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

  return data
}
