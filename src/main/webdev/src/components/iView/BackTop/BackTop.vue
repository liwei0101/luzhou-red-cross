<template>
    <div class="iview-custom-back-top">
        <BackTop :height="height" :bottom="bottom" :right="right" :duration="duration">
            <div>123123123</div>
        </BackTop>
    </div>
</template>

<script>
  export default {
    name: "iview-custom-back-top",
    data () {
      return {

      }
    },
    props: {
      height: {
        type: Number,
        default: 400
      },
      bottom: {
        type: Number,
        default: 30
      },
      right: {
        type: Number,
        default: 30
      },
      duration: {
        type: Number,
        default: 1000
      }
    },
    methods: {

    }
  };
</script>
<style lang="less">

</style>


