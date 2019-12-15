<script>
import BasicMap from './basic-map.md'

import CN from './api.zh-CN.md'
import US from './api.en-US.md'

const md = {
  cn: `# Alert 警告提示
警告提示，展现需要关注的信息。
## 何时使用
- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
          ## 代码演示`,

  us: `# Alert
Alert component for feedback.
## When To Use
- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.
## Examples
`,
}
export default {
  category: 'Components',
  subtitle: '警告提示',
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
