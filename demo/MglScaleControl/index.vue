<script>
import BasicMap from './basic-map.md'

import UsProps from './api-props.en-US.md'
import UsElse from './api-else.en-US.md'

// import CN from './api.zh-CN.md'

const md = {
  cn: `
# MglScaleControl

A ScaleControl control displays the ratio of a distance on the map to the corresponding distance on the ground.

## 代码演示
`,

  us: `
# MglScaleControl

A ScaleControl control displays the ratio of a distance on the map to the corresponding distance on the ground.

## Examples
`,
}
export default {
  category: 'Components',
  subtitle: 'MglMap',
  type: 'Feedback',
  zhType: '反馈',
  title: 'Alert',
  render() {
    return (
      <div class='page'>
        <md cn={md.cn} us={md.us} />

        <BasicMap />

        <api>
          <UsProps></UsProps>
          {/* <UsElse></UsElse> */}
        </api>
      </div>
    )
  },
}
</script>

<style lang="less" scoped>
.page {
  /deep/ .mgl-map-wrapper {
    width: 100%;
    height: 100%;
  }
}
</style>
