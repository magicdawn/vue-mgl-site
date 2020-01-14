<cn>
#### 基本地图
MglMap 组件会自动 `width: 100%; height: 100%`, 需要指定外层 `.map-container` 的大小
</cn>

<us>
#### Example: big city in China
use `MglSource` to add source to map, and use `MglLayer` to consume the source
</us>

```tpl
<template>
  <div class="map-container">
    <MglMap
      :mapStyle="'mapbox://styles/mapbox/streets-zh-v1'"
      :center="{ lng: '115.789893', lat: '35.629300' }"
      :zoom="3.4"
      :attributionControl="false"
    >
      <MglSource type='geojson' :data='geojson'>
        <MglLayer
          type='circle'
          :paint="{
            'circle-color': '#ff0000',
            'circle-radius': 8
          }"
        />
      </MglSource>
    </MglMap>
  </div>
</template>

<script>
// [{ city, center }]
import cityList from './city.data.js'

const geojson = {
  type: 'FeatureCollection',
  features: []
}

for(let c of cityList) {
  const {city, center} = c

  // [lat,lng] => [lng,lat]
  center.reverse()

  geojson.features.push({
    type: 'Feature',
    properties: {
      city,
    },
    geometry: {
      type: 'Point',
      coordinates: center,
    }
  })
}

export default {
  beforeCreate() {
    this.geojson = geojson
  }
}
</script>

<style>
.map-container{
  height: 300px;
}
</style>
```
