<template>
    <van-swipe 
        :height="height"
        :autoplay="autoplay"
        :touchable="touchable" 
        :show-indicators="false"
        :vertical="false" 
        :loop="loop" 
        :duration="duration" 
        >
        <slot></slot>
    </van-swipe>
</template>
<script>
export default {
    name: "vant-custom-swipe-tab1",
    props: {
        autoplay: {
            type: Number,
            default: 3000
        },
        duration: {
            type: Number,
            default: 500
        },
        // autoplay: {
        //     type: Number,
        //     default: 3000
        // },
        loop: {
            type: Boolean,
            default: true
        },
        touchable: {
            type: Boolean,
            default: true
        },
        height: {
            type: Number,
            default: 300
        },
    },
    data() {
        return {
            
        }
    },
    mounted () {
    },
    methods: {
        /**
         * 解决不能撑开全屏宽度的问题
         */
        hackNotFullWidth() {
            
        }
    }
}
</script>
<style lang="less">
// .van-swipe__track{
//     width: 100%!important;
// }
</style>


