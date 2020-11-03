<template>
  <div class="vant-custom-swipi-info">
    <div v-if="isImg" :style="'width:' + imgWidth+'px;'" class="left-img">
        <slot></slot>
    </div>
    <div class="content-swipe" :style="'height:' + (lines * height)+'px;'">
        <van-swipe 
            :height="height*lines"
            ref="swiper" 
            :touchable="touchable" 
            @change="onChange"
            :show-indicators="false"
            :vertical="true" 
            :loop="loop" 
            :duration="duration" 
            :autoplay="autoplay"
            >
            <van-swipe-item   
            :style="'-webkit-line-clamp:'+lines+';height:'+(lines*height)+'px;'"  
            v-for="(item, index) in mainData" 
            :key="index" @click="clickItem(item)">
                <div style="overflow: hidden;">
                    {{item[title]}}
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
   
  </div>
  
</template>

<script>
export default {
    name: "vant-custom-swipi-info",
    props: {
        isImg: {
            type: Boolean,
            default: true
        },
        width:'100%',
        height: {
            type: Number,
            default: 20
        },
        leftIcon: {
            type: String,
            default: 'plus'
        },
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
        lines: {
            type: Number,
            default: 2
        },
        imgWidth: {
            type: Number,
            default: 40
        },
        loop: {
            type: Boolean,
            default: true
        },
        touchable: {
            type: Boolean,
            default: true
        },
        mainData: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: "title"
        }
    },
    data() {
        return {
            
        }
    },
    computed: {

    },
    methods: {
        clickItem(item) {
            this.$emit('click',item)
        },
        onChange(index) {
            this.$emit('change',index)
        }
    }
    
}
</script>
<style lang="less">
    .vant-custom-swipi-info{
        display: flex;
        .left-img{
            display: inline-block;
        }
        .content-swipe{
            width: 100%;
            flex: 1;
            overflow: hidden;
        }
        .van-swipe-item{
            // height: 40px!important;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }   
    }
    
</style>


