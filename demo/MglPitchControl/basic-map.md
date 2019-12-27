<cn>
#### 基本地图
MglMap 组件会自动 `width: 100%; height: 100%`, 需要指定外层 `.map-container` 的大小
</cn>

<us>
#### basic use
basic use
</us>

```tpl
<template>
  <div class="map-container">
    <MglMap
      :mapStyle="'mapbox://styles/mapbox/streets-zh-v1'"
      :center="{ lng: '116.5429700566', lat: '39.6733741772' }"
      :zoom="12"
      :attributionControl="false"
    >
      <MglPitchControl />
    </MglMap>
  </div>
</template>

<style>
.map-container{
  height: 300px;
}
</style>
```
