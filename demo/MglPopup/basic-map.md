<cn>
#### 基本地图
use `MglMarker` & `MglPopup`
</cn>

<us>
#### basic map
use `MglMarker` & `MglPopup`
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
      <MglPopup :lnglat='[116.5429700566, 39.6733741772]' :show='true'>
        <div class="popup">
          I'm the popup content
        </div>
      </MglPopup>
    </MglMap>
  </div>
</template>

<!--
<template v-slot:marker>
</template>
-->

<style>
.map-container{
  height: 300px;
}

.marker{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.popup{
  color: blue;
  min-width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
```
