<cn>
#### 基本地图
add image overlap to map
</cn>

<us>
#### basic map
add image overlap to map
</us>

```tpl
<template>
  <div class="map-container">
    <MglMap
      :mapStyle="'mapbox://styles/mapbox/streets-zh-v1'"
      :center="{ lng: -75.84916686888198, lat: 42.648811029347854 }"
      :zoom="5"
      :attributionControl="false"
    >
      <MglImageLayer
        :url="'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif'"
        :coordinates="[
          [-80.425, 46.437],
          [-71.516, 46.437],
          [-71.516, 37.936],
          [-80.425, 37.936],
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
