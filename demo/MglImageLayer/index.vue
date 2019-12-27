<script>
import BasicMap from './basic-map.md'

import UsProps from './api-props.en-US.md'
import UsElse from './api-else.en-US.md'

// import CN from './api.zh-CN.md'

const md = {
  cn: `
# MglImageLayer
add Image overlap to map

## 代码演示
`,

  us: `
# MglImageLayer
add Image overlap to map

## Examples
`,
}
export default {
  category: 'Components',
  subtitle: 'MglImageLayer',
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
