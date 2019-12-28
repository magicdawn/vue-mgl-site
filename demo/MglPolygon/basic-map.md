<cn>
#### 基本地图
just use borderColor/borderWidth, fillColor/fillOpacity to display a Polygon
</cn>

<us>
#### basic map
just use borderColor/borderWidth, fillColor/fillOpacity to display a Polygon
</us>

```tpl
<template>
  <div class="map-container">
    <MglMap
      :mapStyle="'mapbox://styles/mapbox/streets-zh-v1'"
      :center="{ lng: 116.55, lat: 39.55 }"
      :zoom="10"
      :attributionControl="false"
    >
      <div>hello</div>
      <MglPolygon
        :geojson='polygon'
        :borderWidth='10'
        borderColor='purple'
        :fillColor='`red`'
        :fillOpacity='0.1'
      />
    </MglMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      polygon: {
        type: 'Polygon',
        coordinates: [
          [
            [116.4, 39.6],
            [116.7, 39.6],
            [116.7, 39.5],
            [116.4, 39.5],
            [116.4, 39.6],
          ]
        ]
      }
    }
  }
}
</script>

<style>
.map-container{
  height: 300px;
}
</style>
```
