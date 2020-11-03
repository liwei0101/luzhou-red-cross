<template>
   <van-tabbar-item :icon="icon">标签</van-tabbar-item>
</template>
<script>
export default {
    name: "vant-custom-tab-item",
    props: {
        icon:{
            type:String,
            default:'home-o',
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
    }
}
</script>
<style lang="less">
</style>


