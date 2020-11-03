<template>
  <van-dropdown-menu
    class="vant-custum-dropdown-menu"
    :active-color="activeColor"
    :zIndex="zIndex"
    :duration="duration"
    :direction="direction"
    :overlay="overlay"
    :close-on-click-overlay="closeOnClickOverlay"
    :close-on-click-outside="closeOnClickOutside"
  >
    <van-dropdown-item
      v-model="selectList[index]"
      :options="item"
      v-for="(item, index) in dataList"
      :key="index"
      @change="$emit('change', item.find(it => it.value == $event))"
      @open="$emit('open')"
      @opened="$emit('opened')"
      @close="$emit('close')"
    />
  </van-dropdown-menu>
</template>

<script>
// import Vue from "vue";
// import { DropdownMenu, DropdownItem } from "vant";
// Vue.use(DropdownMenu).use(DropdownItem);

export default {
  name: "vant-custum-dropdown-menu",
  props: {
    activeColor: {
      type: String,
      default: "red"
    },
    direction: {
      type: String,
      default: "down"
    },
    zIndex: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 0.2
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true
    },
    selectList: {
      type: Array,
      default() {
        return [];
      }
    },
    dataList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="less">
.vant-custum-dropdown-menu {
  .van-dropdown-menu__item {
    padding-right: 10px;
  }
}
</style>

