const fs = require('fs')
const _ = require('lodash')

const jsdoc = fs.readFileSync(__dirname + '/jsdoc.txt', 'utf8')

const descMap = {}

const lines = jsdoc
  .split('@param')
  .map(_.trim)
  .filter(Boolean)

for (let line of lines) {
  const reg = /\[?options.(\w+?)(?:(?:=([\w,'"-]+))?\])? ([\s\S]+?)$/g
  const match = reg.exec(line)

  if (!match) {
    // console.log({line, match})
    continue
  }

  const [input, field, defaultValue, desc] = match
  descMap[field] = {desc, defaultValue}
}

descMap.center = {
  /* eslint quotes: off */
  desc:
    "The inital geographical centerpoint of the map. If `center` is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `[0, 0]` \nNote: Mapbox GL uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON.",
  defaultValue: '[0, 0]',
}

console.log(descMap)
module.exports = descMap
