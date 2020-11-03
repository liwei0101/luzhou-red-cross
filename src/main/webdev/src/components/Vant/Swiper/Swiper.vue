<template>
<div>sdfsdf
   <div class="swiper" >sdfsdfsdf
    <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
          22 {{item}} <img class="swiper-item" :src="item">
        </div>
    <div class="swiper-container" >
      <div class="swiper-wrapper" style="padding-top: 20px">
        <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
          22 {{item}} <img class="swiper-item" :src="item">
        </div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" :style="'bottom:'+topDistance+'px'"></div>
  </div>
</div>
 
</template>
<script>
import "./swiper.min.css";
import Swiper from "./swiper.min.js";
export default {
  name: "swiper",
  props: {
    swiperList: {
      type: Array,
      default: () => {
        return [
          "https://q1.qlogo.cn/g?b=qq&k=4xVicbhChNABQu9DpW74MFA&s=40&t=1370982588",
          "https://q1.qlogo.cn/g?b=qq&k=4xVicbhChNABQu9DpW74MFA&s=40&t=1370982588",
          "https://q1.qlogo.cn/g?b=qq&k=4xVicbhChNABQu9DpW74MFA&s=40&t=1370982588",
          "https://q1.qlogo.cn/g?b=qq&k=4xVicbhChNABQu9DpW74MFA&s=40&t=1370982588"
        ];
      }
    },
    heightLine: {
      type: Number,
      default: 250
    },
    topDistance: {
      type: Number,
      default: 5
    },
    loop: {
      type: Boolean,
      default: true
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    sliderNumber: {
      type: Number,
      default: 2
    },
    initialNumber: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      swiper: null
    };
  },
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      loop: this.loop,
      // 如果需要分页器
      pagination: {
        el: this.showPagination ? ".swiper-pagination" : "",
        bulletElement: "li"
      },
      paginationClickable: true,
      centeredSlides: true,
      slidesPerView: this.sliderNumber,
      initialSlide: this.initialNumber,
      watchActiveIndex: true
    });
  }
};
</script>
<style scoped>
.swiper {
  position: relative;
  height: 280px;
  overflow: hidden;
}
.swiper-container {
  /*-webkit-transform: translate3d(-20px,0,0);*/
  /*-moz-transform: translate3d(-20px,0,0);*/
  /*-ms-transform: translate3d(-20px,0,0);*/
  /*-o-transform: translate3d(-20px,0,0);*/
  /*transform: translate3d(-20px,0,0);*/
  overflow: visible !important;
  margin-top: 10px;
  width: 100%;
  text-align: center;
}

.swiper-slide {
  height: 95%;
  width: 180px;
  overflow: hidden;
  -webkit-transition: 300ms;
  transition: 300ms;
  border-radius: 6px;
  /* -webkit-transform: scale(0);
    transform: scale(0); */
  position: relative;
}

.swiper-item {
  width: 290px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.swiper-slide-visible {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
.swiper-slide-active {
  top: 0;
  opacity: 1;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.swiper-pagination {
  position: absolute;
  z-index: 20;
  left: 0px;
  width: 100%;
  text-align: center;
}

.swiper-pagination-bullet {
  margin: 0 13px;
}
</style>