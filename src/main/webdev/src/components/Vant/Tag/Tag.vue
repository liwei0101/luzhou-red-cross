<template>
    <div>
        <van-tag :type="type" :size="size" :color="color" :plain="plain" :round="round" :mark="mark" :text-color="textColor" @click="onclick">
            <slot></slot>
        </van-tag>
    </div>
</template>

<script>
  export default {
    name: "vant-input-tag",
    props: {
      type: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      plain: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      mark: {
        type: Boolean,
        default: false
      },
      textColor: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
      }
    },
    mounted () {

    },
    methods: {
      onclick () {
        this.$emit('click');
      }
    },
    watch: {

    }
  }
</script>
<style lang="less">

</style>



