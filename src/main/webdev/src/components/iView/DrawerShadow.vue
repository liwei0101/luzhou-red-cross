<template>
  <div class="iview-custom-drawer-shadow">
    <div class="ivu-drawer-mask" v-if="mask"></div>
    <div class="ivu-drawer-wrap">
      <div class="ivu-drawer" :class="[`ivu-drawer-${placement}`]" :style="styles">
        <div class="ivu-drawer-content">
          <a class="ivu-drawer-close">
            <i class="ivu-icon ivu-icon-ios-close"></i>
          </a>
          <div class="ivu-drawer-header">
            <div class="ivu-drawer-header-inner">{{title}}</div>
          </div>
          <div class="ivu-drawer-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * iView 影子Drawer
 * @author stj
 * @description 使用场景 在设计器 内替换影子Drawer设计内容
 */
export default {
  name: "iview-custom-drawer-shadow",
  props: {
    value: [Boolean],
    title: [String],
    okText: [String],
    cancelText: [String],
    width: [Number],
    zIndex: [Number],
    placement: [String],
    mask: [Boolean]
  },
  computed: {
    styles () {
      let zIndex = this.zIndex
      let width = `${this.width}px`
      let heigh = 'auto'
      if (this.fullscreen) {
        width = '100%'
        heigh = '100%'
      }
      return {
        width,
        heigh,
        zIndex,
      }
    }
  }
}
</script>

<style lang="less">
  .iview-custom-drawer-shadow {
    position: absolute;
    bottom:0;
    top:0;
    right: 0;
    left: 0;

    .ivu-drawer-mask,
    .ivu-drawer-wrap,
    .ivu-drawer {
      position: absolute !important;
    }
    .ivu-drawer-body>.box {
      width: 100%;
      height: 100%
    }
  }
</style>


