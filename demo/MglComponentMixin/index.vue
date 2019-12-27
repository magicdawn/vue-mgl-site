<script>
import Intro from './intro.en-US.md'

const md = {
  cn: ``,

  us: `
# MglComponentMixin
the mixin for all 'MglXxx' under a 'MglMap' context

## Introduction
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

        <api>
          <Intro></Intro>
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
