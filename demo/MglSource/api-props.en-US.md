<!-- Auto generated, do not modify -->

## API

### props

check [https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources](https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources) for description

| props             | type              | required | default                             | description                                                                                           |
| ----------------- | ----------------- | -------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------- |
| id                | `String`          |          | `"mgl-source-${type}-${this._uid}"` | source id                                                                                             |
| type              | `String`          | ✔        |                                     | source type,allowed: <br /> `'vector'`, `'raster'`, `'raster-dem'`, `'geojson'`, `'image'`, `'video'` |
| url               | `String`          |          |                                     | source url                                                                                            |
| tiles             | `Array`           |          |                                     | source tiles                                                                                          |
| tileSize          | `Number`          |          |                                     |                                                                                                       |
| bounds            | `Array`           |          |                                     |                                                                                                       |
| scheme            | `String`          |          |                                     |                                                                                                       |
| minzoom           | `Number`          |          |                                     |                                                                                                       |
| maxzoom           | `Number`          |          |                                     |                                                                                                       |
| attribution       | `String`          |          |                                     |                                                                                                       |
| encoding          | `String`          |          |                                     |                                                                                                       |
| data              | `String | Object` |          |                                     |                                                                                                       |
| buffer            | `Number`          |          |                                     |                                                                                                       |
| tolerance         | `Number`          |          |                                     |                                                                                                       |
| cluster           | `Boolean`         |          |                                     |                                                                                                       |
| clusterRadius     | `Number`          |          |                                     |                                                                                                       |
| clusterMaxZoom    | `Number`          |          |                                     |                                                                                                       |
| clusterProperties | `Object`          |          |                                     |                                                                                                       |
| lineMetrics       | `Boolean`         |          |                                     |                                                                                                       |
| generateId        | `Boolean`         |          |                                     |                                                                                                       |
| coordinates       | `Array`           |          |                                     |                                                                                                       |
| urls              | `Array`           |          |                                     |                                                                                                       |
