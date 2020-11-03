<template>
    <Carousel
            :value="value"
            :height="height"
            :loop="loop"
            :autoplay="autoplay"
            :autoplay-speed="autoplaySpeed"
            :dots="dots"
            :radius-dot="radiusDot"
            :trigger="trigger"
            :arrow="arrow"
            :easing="easing"
            @on-change="change"
    >
        <CarouselItem v-for="(item,index) of list" :key="index">
            <div class="demo-carousel">
                <img :style="'width:'+imgwidth+'px', 'height:'+imgheight+'px'" :src="item.img" :alt="item.name" v-if="item.img" @click="jump(item.link)"/>
                <div class="txt" v-if="item.name&&showName">{{item.name}}</div>
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
    export default {
        name: "iview-custom-carousel",
        data () {
            return {

            }
        },
        props: {
            addLink:{
                type: Boolean,
                default: true
            },
            showName:{
                type: Boolean,
                default: true
            },
            list:{
              type: Array,
              default: []
            },
            value: {
                type: Number,
                default: 0
            },
            height: {
                type: [String, Number],
                default: 'auto'
            },
            loop: {
                type: Boolean,
                default: false
            },
            autoplay: {
                type: Boolean,
                default: false
            },
            autoplaySpeed: {
                type: Number,
                default: 2000
            },
            dots: {
                type: String,
                default: 'inside'
            },
            radiusDot: {
                type: Boolean,
                default: false
            },
            trigger: {
                type: String,
                default: 'click'
            },
            arrow: {
                type: String,
                default: 'hover'
            },
            easing: {
                type: String,
                default: 'ease'
            },
            imgwidth: {
                type: Number,
                default: 500
            },
            imgheight: {
                type: Number,
                default: 300
            }
        },
        methods: {
            jump(link){
                if(link && this.addLink){
                    window.location.href = link;
                }
            },
            change(oldValue,value){
                this.$emit('onChange',oldValue,value)
            }
        }
    }
</script>

<style lang="less" scoped>
.demo-carousel{
    text-align: center;
    padding: 10px 0;
    margin-bottom: 6px;
    img{
        max-width: 100%;
        max-height: 100%;
        margin: auto;
    }
    .txt{
    }
}
</style>