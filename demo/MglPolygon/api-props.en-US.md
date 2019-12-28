<!-- Auto generated, do not modify -->

## API

### props

| props        | type     | required | default                             | description                                                              |
| ------------ | -------- | -------- | ----------------------------------- | ------------------------------------------------------------------------ |
| sourceId     | `String` |          | `"mgl-polygon-${this._uid}-source"` | source id                                                                |
| geojson      | `Object` |          |                                     | the geojson data                                                         |
| filter       | `Array`  |          |                                     |                                                                          |
| borderColor  | `String` |          |                                     |                                                                          |
| borderWidth  | `Number` |          |                                     |                                                                          |
| borderPaint  | `Object` |          |                                     | custom border layer paint                                                |
| borderLayout | `Object` |          |                                     | custom border layer layout                                               |
| fillColor    | `String` |          |                                     |                                                                          |
| fillOpacity  | `Number` |          |                                     |                                                                          |
| fillPaint    | `Object` |          |                                     | custom fill layer paint                                                  |
| fillLayout   | `Object` |          |                                     | custom fill layer layout                                                 |
| mglProps     | `Object` |          |                                     | other props passed to MglLayer                                           |
| layerKey     | `String` |          | `"mgl-polygon-${this._uid}"`        | layerKey will be the prefix for `source` & `border layer` & `fill layer` |
