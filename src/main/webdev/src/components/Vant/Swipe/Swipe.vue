<template>
  <div class="vant-custom-swipe">
    <van-swipe
      :height="height"
      :indicator-color="indicatorColor"
      :width="width"
      ref="swiper"
      :touchable="touchable"
      @change="onChange"
      :vertical="vertical"
      :show-indicators="showIndicators"
      :loop="loop"
      :initial-swipe="initialSwipe"
      :duration="duration"
      :style="'height:'+heightLine+'px;borderRadius:'+borderRa+'px'"
      :autoplay="autoplay"
      :class="{'text-div': title }"
    >
      <van-swipe-item
        :style="'height:'+heightLine+'px;'"
        v-for="(item, index) in images"
        :key="index"
        @click="clickItem(item)"
      >
        <img class="img" :style="'height:'+heightLine+'px;width: 100%;'" :src="item[imageSrc]" />
        {{item[imageSrc]}}
        <div class="img-box" v-show="title">
          <div class="img-div"></div>
          <div class="img-text">{{item[text]}}</div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "vant-custom-swipe",
  props: {
    autoplay: {
      type: Number,
      default: 3000
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 230
    },
    theme: {
      type: String,
      default: "default"
    },
    indicatorColor: {
      type: String,
      default: "#1989fa"
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    vertical: {
      type: Boolean,
      default: false
    },
    touchable: {
      type: Boolean,
      default: true
    },
    title: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: "text"
    },
    borderRa: {
      type: Number,
      default: 0
    },
    heightLine: {
      type: Number,
      default: 230
    },
    imageSrc: {
      type: String,
      default: "images"
    },
    images: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    clickItem(item) {
      this.$emit("click", item);
    },
    onChange(index) {
      this.$emit("change", index);
      //this.current = index;
    },
    /**
     * 解决不能撑开全屏宽度的问题
     */
    hackNotFullWidth() {
      let n = 0;
      let t = setInterval(() => {
        if (n++ > 3) clearInterval(t);
        this.$refs.swiper.initialize();
      }, 50);
    }
  },
  mounted() {
    this.hackNotFullWidth();
  }
};
</script>
<style lang="less" scoped>
.vant-custom-swipe {
  .img {
    position: absolute;
  }
  .img-box {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
  }
  .img-div {
    position: relative;
    /* opacity: 0.1;*/
    width: 100%;
    /*background-image: linear-gradient(-180deg, rgba(255,255,255,0) 0%, #000000 100%);*/
    z-index: 99999;
    height: 40px;
    line-height: 40px;
    opacity: 0.5;
    background: #000000;
    /*text-align: center;*/
    /* padding: 10px;*/
    /* line-height: 64px;*/
    /* background: -webkit-linear-gradient(top, rgba(0,0,0,0.3), rgba(255,255,255,0.17),rgba(0,0,0,0.3)); !* Safari 5.1 - 6.0 *!
         background: -o-linear-gradient(bottom, rgba(0,0,0,0.3), rgba(255,255,255,0.17),rgba(0,0,0,0.3)); !* Opera 11.1 - 12.0 *!
         background: -moz-linear-gradient(bottom, rgba(0,0,0,0.3), rgba(255,255,255,0.17),rgba(0,0,0,0.3)); !* Firefox 3.6 - 15 *!
         background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(255,255,255,0.17),rgba(0,0,0,0.3)); !* 标准的语法（必须放在最后） *!*/
  }
  .img-text {
    /* position: absolute;
        top: 12px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #ffffff;
       !* line-height: 18px;*!
        z-index: 100000;
        height: 30px;
        margin-top: -26px;
        width: 100%;
        !* text-align: center;*!
        padding: 15px 10px;*/
    height: 40px;
    line-height: 44px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #ffffff;
    padding-left: 10px;
    width: 80%;
    position: absolute;
    top: 0;
    z-index: 100000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text-div .van-swipe__indicators {
    left: 93% !important;
  }
}
</style>


