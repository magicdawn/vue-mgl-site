<!-- Auto generated, do not modify -->

## API

### props

| props             | type      | required | default                                       | description                                                                                                                                                                                          |
| ----------------- | --------- | -------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position          | `String`  |          | `"top-right"`                                 |                                                                                                                                                                                                      |
| positionOptions   | `Object`  |          | `{"enableHighAccuracy":false,"timeout":6000}` | A Geolocation API [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) object.                                                                                        |
| fitBoundsOptions  | `Object`  |          | `{"maxZoom":15}`                              | A fitBounds options object to use when the map is panned and zoomed to the user's location. The default is to use a maxZoom of 15 to limit how far the map will zoom in for very accurate locations. |
| trackUserLocation | `Boolean` |          | `false`                                       | If true the Geolocate Control becomes a toggle button and when active the map will receive updates to the user's location as it changes.                                                             |
| showUserLocation  | `Boolean` |          | `true`                                        | By default a dot will be shown on the map at the user's location. Set to false to disable.                                                                                                           |
