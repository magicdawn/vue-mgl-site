### props FAQ

Q: for `MglPopup` use `lnglat` as prop for location, Why not `coordinates`?
A: for `mgl.Popup#setLnglat`, and mgl.Popup does not have a `setCoordinates` method

### events

| event name | description         | arguments | remark |
| ---------- | ------------------- | --------- | ------ |
| ready      | when popup is added | no args   |        |

### slots

| slot name | description       |
| --------- | ----------------- |
| default   | the popup content |

### instance properties

| name         | description              |
| ------------ | ------------------------ |
| `this.popup` | the `mgl.Popup` instance |
