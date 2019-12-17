# Getting Started

require [Node.js](https://nodejs.org/)(> v8.9)

## basic map

### index.js

```js
import Vue from 'vue'
import VueMgl, {mgl} from 'vue-mgl'
Vue.use(VueMgl)

import App from './App'
Vue.config.productionTip = false

import 'mapbox-gl/dist/mapbox-gl.css'
mgl.accessToken = 'your mapbox accessToken'

new Vue({
  el: '#app',
  render: h => h(App),
})
```

### App.vue

```vue
<template>
  <div class="map-container">
    <MglMap
      class="map"
      :map-style="'mapbox://styles/mapbox/streets-zh-v1'"
      :center="{lng: '116.5429700566', lat: '39.6733741772'}"
      :zoom="12"
      :attribution-control="false"
      @load="onMapLoad"
    >
    </MglMap>
  </div>
</template>

<script>
export default {
  methods: {
    onMapLoad({map}) {
      this.map = map
    },
  },
}
</script>

<style>
.map-container {
  width: 500px;
  height: 500px;
}
</style>
```

### Component list

> All the components in antd are listed in the sidebar.
