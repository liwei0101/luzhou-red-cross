<template>
    <div class="iview-custom-spin">
        <div v-show="!customStyle">
            <Spin :size="size" :fix="fix"></Spin>
        </div>
        <div  v-show="customStyle">
            <Spin :size="size" :fix="fix">
                <slot></slot>
            </Spin>
        </div>
    </div>
</template>

<script>
  export default {
    name: "iview-custom-spin",
    data () {
      return {

      }
    },
    props: {
      size: {
        type: String,
        default: ''
      },
      fix: {
        type: Boolean,
        default: false
      },
      customStyle: {
        type: Boolean,
        default: false
      }
    },
    methods: {

    }
  };
</script>
<style lang="less">

</style>


