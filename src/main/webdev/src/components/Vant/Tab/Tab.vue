<template>
  <van-tabs
    :value="active"
    :type="type"
    :duration="duration"
    :background="background"
    :line-width="lineWidth"
    :line-height="lineHeight"
    :color="color"
    :title-active-color="titleActiveColor"
    :title-inactive-color="titleInactiveColor"
    :swipeable="swipeable"
    :sticky="sticky"
    :offset-top="offsetTop"
    :swipe-threshold="swipeThreshold"
    :animated="animated"
    :ellipsis="ellipsis"
    :lazy-render="lazyRender"
    :class="isBottom?'bottom-tab-box':''"
    @click="onclick"
    @change="onchange"
    @disabled="ondisabled"
    @scroll="onscroll"
  >
    <slot></slot>
  </van-tabs>
</template>
<script>
export default {
  name: "vant-custom-tab",
  props: {
    active: {
      type: [String, Number],
      default: 0
    },
    isBottom: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "line"
    },
    duration: {
      type: Number,
      default: 0.3
    },
    background: {
      type: String,
      default: "white"
    },
    lineWidth: {
      type: Number
    },
    lineHeight: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: "#f44"
    },
    titleActiveColor: {
      type: String
    },
    titleInactiveColor: {
      type: String
    },
    swipeable: {
      type: Boolean,
      default: false
    },
    sticky: {
      type: Boolean,
      default: false
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    swipeThreshold: {
      type: Number,
      default: 4
    },
    animated: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onclick(index, title) {
      let params = {
        index: index,
        title: title
      };
      this.$emit("click", params);
    },
    onchange(index, title) {
      let params = {
        index: index,
        title: title
      };
      this.$emit("change", params);
    },
    ondisabled(index, title) {
      let params = {
        index: index,
        title: title
      };
      this.$emit("disabled", params);
    },
    onscroll(params) {
      this.$emit("scroll", params);
    }
  }
};
</script>

<style lang="less">
.van-tabs__line{
    background: hsl(360, 73%, 53%)!important;
    height: 2px!important;
}
.van-tab{
    font-size: 15px;
}
.van-tab--active{
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #DF3031;
    text-align: center;
}
.bottom-tab-box.van-tabs--line {
  padding-bottom: 44px;
  padding-top: 0;
  .van-tabs__wrap {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    overflow: hidden;
    position: fixed;
  }
}
</style>