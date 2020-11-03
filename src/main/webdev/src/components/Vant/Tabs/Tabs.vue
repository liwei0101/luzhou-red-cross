<template>
    <div class="vant-input-tabs" :class="isScreen?'vant-input-tab':''">
        <van-tabs :v-model="vModel" :type="type" :duration="duration" :background="background" :line-width="lineWidth" :line-height="lineHeight" :color="color" :title-active-color="titleActiveColor" :title-inactive-color="titleInactiveColor" :swipeable="swipeable" :sticky="sticky" :offset-top="offsetTop" :swipe-threshold="swipeThreshold" :animated="animated" :ellipsis="ellipsis" :lazy-render="lazyRender" @click="onclick" @change="onchange" @disabled="ondisabled" @scroll="onscroll">
            <slot></slot>
        </van-tabs>
        <div v-if="isScreen" class="tabs-screen" :style="'width:' + width + 'px'" @click="scrclick">
            <slot name="screen"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "vant-input-tabs",
    props: {
      vModel: {
        type: String,
        default: '0'
      },
      type: {
        type: String,
        default: 'line'
      },
      duration: {
        type: Number,
        default: 0.3
      },
      background: {
        type: String,
        default: 'white'
      },
      lineWidth: {
        type: Number,
        default: null
      },
      lineHeight: {
        type: Number,
        default: 3
      },
      color: {
        type: String,
        default: '#f44'
      },
      titleActiveColor: {
        type: String,
        default: ''
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
      titleInactiveColor: {
        type: String,
        default: ''
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
      isScreen: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 50
      }
    },
    data() {
      return {
      }
    },
    mounted () {
      console.log(this.width);
    },
    methods: {
      onclick( index,title){
            let params = {
              index: index,
              title: title
            }
            this.$emit('click', params)
      },
      onchange( index,title){
        let params = {
          index: index,
          title: title
        }
        this.$emit('change', params)
      },
      ondisabled( index,title){
        let params = {
          index: index,
          title: title
        }
        this.$emit('disabled', params)
      },
      onscroll( params){
        this.$emit('scroll', params)
      },
      scrclick( params){
        this.$emit('scrclick', params)
      }
    },
    watch: {

    }
  }
</script>
<style lang="less">
.vant-input-tabs{
    position: relative;
    .tabs-screen{
        text-align: center;
        height: 44px;
        line-height: 44px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 100;
        cursor: pointer;
    }
}
.vant-input-tab{
    .van-tabs__nav{
        margin-right: 50px;
    }
}
</style>



