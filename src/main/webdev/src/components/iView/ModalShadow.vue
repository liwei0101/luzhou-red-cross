<template>
  <div class="iview-custom-modal-shadow">
    <div class="ivu-modal-mask" v-if="mask"></div>
    <div class="ivu-modal-wrap">
      <div class="ivu-modal" :class="{'ivu-modal-fullscreen': fullscreen}" :style="styles">
        <div class="ivu-modal-content">
          <a class="ivu-modal-close">
            <i class="ivu-icon ivu-icon-ios-close"></i>
          </a>
          <div class="ivu-modal-header">
            <div class="ivu-modal-header-inner">{{title}}</div>
          </div>
          <div class="ivu-modal-body">
            <slot></slot>
          </div>
          <div class="ivu-modal-footer">
            <button type="button" class="ivu-btn ivu-btn-text ivu-btn-large">
              <span>{{cancelText}}</span>
            </button>
            <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-large">
              <span>{{okText}}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * iView 影子模态框
 * @author stj
 * @description 使用场景 在设计器 内替换modal模态框设计内容
 */
export default {
  name: "iview-custom-modal-shadow",
  props: {
    value: [Boolean],
    title: [String],
    okText: [String],
    cancelText: [String],
    width: [Number],
    zIndex: [Number],
    fullscreen: [Boolean],
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
  .iview-custom-modal-shadow {
    position: absolute;
    bottom:0;
    top:0;
    right: 0;
    left: 0;

    .ivu-modal-mask,
    .ivu-modal-wrap {
      position: absolute !important;
    }
    .ivu-modal-fullscreen {
      .ivu-modal-body>.box {
        width: 100%;
        height: 100%
      }
    }
  }
</style>


