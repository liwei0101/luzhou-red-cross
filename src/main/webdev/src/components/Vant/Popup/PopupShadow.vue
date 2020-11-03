<template>
  <div class="popup-shadow">
    <div class="van-overlay" v-if="overlay"></div>
    <div class="van-popup" :class="classes">
      <slot>内容</slot>
    </div>
  </div>
</template>

<script>
/**
 * Vant 影子Popup
 * @author stj
 * @description 使用场景 在设计器 内替换影子Popup设计内容
 */
export default {
  name: "popup-shadow",
  props: {
    overlay: [Boolean],
    position: [String],
  },
  computed: {
    classes () {
      let prefix = 'van-popup--'
      return this.position ? `${prefix}${this.position}` : ''
    }
  }
}
</script>

<style lang="less">
  .popup-shadow,
  .page {
    position: absolute;
    bottom:0;
    top:0;
    right: 0;
    left: 0;
    .van-overlay,
    .van-popup {
      position: absolute;
    }
  }
</style>


