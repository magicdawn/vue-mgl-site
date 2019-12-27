<cn>
#### 基本地图
add Video overlap to the map
</cn>

<us>
#### basic map
add Video overlap to the map
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
      <MglVideoLayer
        :urls="[
          'https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4',
          'https://static-assets.mapbox.com/mapbox-gl-js/drone.webm',
        ]"
        :coordinates="[
          [116.4, 39.6],
          [116.7, 39.6],
          [116.7, 39.5],
          [116.4, 39.5],
        ]"
      />
    </MglMap>
  </div>
</template>

<style>
.map-container{
  height: 300px;
}
</style>
```
