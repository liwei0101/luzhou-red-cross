<template>
    <div class="iview-custom-scroll">
        <Scroll :height="height" :loading-text="loadingText" :on-reach-top="onReachTop" :on-reach-bottom="onReachBottom" :on-reach-edge="onReachEdge" :distance-to-edge="distanceToEdge">
        </Scroll>
    </div>
</template>

<script>
  export default {
    name: "iview-custom-scroll",
    data () {
      return {

      }
    },
    props: {
      height: {
        type: Number,
        default: 300
      },
      loadingText: {
        type: String,
        default: '加载中'
      },
      distanceToEdge: {
        type: Array,
        default: [20, 20]
      }
    },
    methods: {
      onReachTop () {
        console.log('top');
        this.$emit('onReachTop')
      },
      onReachBottom () {
        console.log('bottom');
        this.$emit('onReachBottom')
      },
      onReachEdge () {
        console.log('edge');
        this.$emit('onReachEdge')
      }
    }
  };
</script>
<style lang="less">

</style>



