## API

### props

| props                        | type                   | required | default         | description |
| ---------------------------- | ---------------------- | -------- | --------------- | ----------- |
| container                    | `String | HTMLElement` |          |                 |             |
| minZoom                      | `Number`               |          | `0`             |             |
| maxZoom                      | `Number`               |          | `22`            |             |
| mapStyle                     | `String | Object`      | ✔        | `null`          |             |
| hash                         | `Boolean`              |          | `false`         |             |
| interactive                  | `Boolean`              |          | `true`          |             |
| bearingSnap                  | `Number`               |          | `7`             |             |
| pitchWithRotate              | `Boolean`              |          | `true`          |             |
| clickTolerance               | `Number`               |          | `3`             |             |
| attributionControl           | `Boolean`              |          | `true`          |             |
| customAttribution            | `String | Array`       |          |                 |             |
| logoPosition                 | `String`               |          | `"bottom-left"` |             |
| failIfMajorPerformanceCaveat | `Boolean`              |          | `false`         |             |
| preserveDrawingBuffer        | `Boolean`              |          | `false`         |             |
| refreshExpiredTiles          | `Boolean`              |          | `true`          |             |
| maxBounds                    | `Array`                |          |                 |             |
| scrollZoom                   | `Boolean | Object`     |          | `true`          |             |
| boxZoom                      | `Boolean`              |          | `true`          |             |
| dragRotate                   | `Boolean`              |          | `true`          |             |
| dragPan                      | `Boolean`              |          | `true`          |             |
| keyboard                     | `Boolean`              |          | `true`          |             |
| doubleClickZoom              | `Boolean`              |          | `true`          |             |
| touchZoomRotate              | `Boolean | Object`     |          | `true`          |             |
| trackResize                  | `Boolean`              |          | `true`          |             |
| center                       | `Array | Object`       |          | `[0,0]`         |             |
| zoom                         | `Number`               |          | `0`             |             |
| bearing                      | `Number`               |          | `0`             |             |
| pitch                        | `Number`               |          | `0`             |             |
| bounds                       | `Array | Object`       |          |                 |             |
| renderWorldCopies            | `Boolean`              |          | `true`          |             |
| maxTileCacheSize             | `Number`               |          |                 |             |
| localIdeographFontFamily     | `String`               |          |                 |             |
| transformRequest             | `Function`             |          |                 |             |
| collectResourceTiming        | `Boolean`              |          | `false`         |             |
| fadeDuration                 | `Number`               |          | `300`           |             |
| crossSourceCollisions        | `Boolean`              |          | `true`          |             |

### events

| event name | description | arguments |
| ---------- | ----------- | --------- |
| event name | description | arguments |
