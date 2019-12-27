<cn>
#### 基本地图
MglMap 组件会自动 `width: 100%; height: 100%`, 需要指定外层 `.map-container` 的大小
</cn>

<us>
#### CustomControl
- CustomControl default slot Allow U to write the control ui
- containerProps should contain `{class: 'mapboxgl-control'}`, will change `pointer-events` css,
  if your CustomControl can't click, check here.
- use `MglComponentMixin` to interact with Map
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
      <ReportCenterControl />
    </MglMap>
  </div>
</template>

<script>
import {MglCustomControl, MglComponentMixin} from 'vue-mgl'

const ReportCenterControl = {
  mixins: [MglComponentMixin],
  render(h) {
    return h(
      MglCustomControl,
      {
        props: {
          position: this.position,
          containerProps: { class: 'mapboxgl-ctrl' }
        }
      },
      [
        h(
          'button',
          {
            on: {
              click: this.handleClick
            }
          },
          'click-to-report-center'
        )
      ]
    );
  },
  mounted() {
    const {map} = this.__context()
    this.map = map
  },
  methods: {
    handleClick() {
      const msg = 'the map center = ' + JSON.stringify(this.map.getCenter())
      this.$message.success(msg)
    }
  },
}

export default {
  components: {ReportCenterControl}
}
</script>

<style>
.map-container{
  height: 300px;
}
</style>
```
