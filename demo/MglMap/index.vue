<script>
import BasicMap from './basic-map.md'

import CN from './api.zh-CN.md'
import US from './api.en-US.md'

const md = {
  cn: `
# MglMap
root map Component

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
          <CN slot='cn' />
          <US />
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
