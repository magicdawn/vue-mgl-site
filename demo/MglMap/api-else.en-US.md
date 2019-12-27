### events

| event name | description             | arguments              | remark                                                                                |
| ---------- | ----------------------- | ---------------------- | ------------------------------------------------------------------------------------- |
| ready      | when map is ready       | no args                |                                                                                       |
| load       | `map.on('load')`        | `({ map, component })` | `map` is the `mapbox-gl.Map` instance <br /> `component` is the `MglMap` vue instance |
| error      | `map.on('error')`       | `(err)`                | https://docs.mapbox.com/mapbox-gl-js/api/#map.event:error                             |
| style-load | when map load new style | no args                |                                                                                       |

#### events for viewport props sync

| event name     | description                   | arguments            |
| -------------- | ----------------------------- | -------------------- |
| update:center  | for `:center.sync='center'`   | (center: LngLatLike) |
| update:zoom    | for `:zoom.sync='zoom'`       | (zoom: Number)       |
| update:bearing | for `:bearing.sync='bearing'` | (bearing: Number)    |
| update:pitch   | for `:pitch.sync='pitch'`     | (pitch: Number)      |

when map viewport change, the viewport state can be synced from mapbox-gl internal to Application Code

#### About `style-load`

when mapStyle change AND mapbox can not do a style diff.
e.g You change map theme from light to dark.
New style will be loaded, this means all your custom layers will be lost, if you do not readd them.
`MglSource` & `MglLayer` will utilize this event to readd layers

See

- https://github.com/mapbox/mapbox-gl-js/blob/v0.42.2/src/ui/map.js#L919
- https://github.com/mapbox/mapbox-gl-js/blob/v0.42.2/src/style/style.js#L230
- and `style.load` will buble to map, can be listened via `map.on('style.load')`
