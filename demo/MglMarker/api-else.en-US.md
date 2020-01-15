### About `v-slot`

`v-slot` not supported for unknown reason
[https://github.com/magicdawn/magicdawn/issues/107#issuecomment-574704430](https://github.com/magicdawn/magicdawn/issues/107#issuecomment-574704430)

### events

| event name | description                  | arguments | remark |
| ---------- | ---------------------------- | --------- | ------ |
| ready      | when marker & popup is added | no args   |        |

### slots

| slot name | description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| marker    | `el` = `this.$slots.marker[0].elm` will used as `new mgl.Marker(el)`         |
| popup     | `el` = `this.$slots.popup[0].elm` will used as `mgl.Popup#setDOMContent(el)` |

### instance properties

| name                | description               |
| ------------------- | ------------------------- |
| `this.marker`       | the `mgl.Marker` instance |
| `this.popup`        | the `mgl.Popup` instance  |
| `this.marker.popup` | equals to `this.popup`    |
