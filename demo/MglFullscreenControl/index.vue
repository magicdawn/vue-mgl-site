<script>
import BasicMap from './basic-map.md'

import UsProps from './api-props.en-US.md'
import UsElse from './api-else.en-US.md'

// import CN from './api.zh-CN.md'

const md = {
  cn: `
# MglMap
A FullscreenControl control contains a button for toggling the map in and out of fullscreen mode.

## 代码演示
`,

  us: `
# MglMap
root map Component

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
