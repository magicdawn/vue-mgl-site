### props

| props        | type                     | required | default | description           |
| ------------ | ------------------------ | -------- | ------- | --------------------- |
| mapComponent | `Vue` Component Instance |          |         | the `MglMap` instance |

All `MglXxx` component use this mixin to interact with map

- first, map will try to use `provide/inject` to get the `MglMap` context map instance
- if not found, will try to use the `mapComponent` prop
- when the `map` or `mapComponent` not found, it will throw

### methods

#### `__context()`

```js
export default {
  mixins: [MglComponentMixin],
  mounted() {
    const {map, component} = this.__context()
    // map is the mapbox-gl.Map instance
    // component is the MglMap Vue instance
  },
}
```

use this method to get the map/component
when you are trying to implement a New vue-mgl Component with this mixin.
