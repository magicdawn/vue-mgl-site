<cn>
#### 基本地图
MglMap 组件会自动 `width: 100%; height: 100%`, 需要指定外层 `.map-container` 的大小
</cn>

<us>
#### basic map
Simple setup to add raster/WMS Layer to mapbox-gl
</us>

```tpl
<template>
  <div class="page">
    <div class="map-container" ref='mapContainer'>
      <MglMap
        :mapStyle="'mapbox://styles/mapbox/streets-zh-v1'"
        :center="{ lng: '116.5429700566', lat: '39.6733741772' }"
        :zoom="12"
        :attributionControl="false"
      >
        <MglControlGroup position='bottom-right'>
          <MglFlyToControl
            :camera='{center: [116.5429700566, 39.6733741772], zoom: 12}'
          />
          <MglFullscreenControl :container='_self.$el' />
        </MglControlGroup>

        <MglCustomControl position='top-right' :containerProps='{class: `mapboxgl-ctrl`}'>
          <div class="panel">
            <div>
              <input type="radio" value='off' v-model='selected' />off
            </div>
            <div>
              <input type="radio" value='autonavi' v-model='selected' />autonavi
            </div>
            <div>
              <input type="radio" value='google' v-model='selected' />google
            </div>
          </div>
        </MglCustomControl>

        <MglRasterLayer
          v-bind='autonavi'
          v-if='autonaviEnabled'
          key='autonavi'
        />
        <MglRasterLayer
          v-bind='google'
          key='google'
          v-if='googleEnabled'
        />
      </MglMap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'off',

      autonavi: {
        tiles: ["https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"],
        sourceMaxzoom: 17
      },

      google: {
        tiles: ['https://www.google.cn/maps/vt?lyrs=s@729&gl=cn&x={x}&y={y}&z={z}']
      }
    }
  },

  computed: {
    googleEnabled() {
      return this.enabled('google')
    },
    autonaviEnabled() {
      return this.enabled('autonavi')
    },
  },

  methods: {
    enabled(key) {
      return key === this.selected
    }
  }
}
</script>

<style>
.page{
  position: relative;
}

.map-container{
  height: 300px;
}

.panel {
  margin-top: 10px;
  margin-right: 10px;
}
</style>
```
