<template>
   <div>
        <van-tabbar
            v-model="active"
            active-color="#07c160"
            >
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="freinds-o">标签</van-tabbar-item>
            <slot>

            </slot>
        </van-tabbar>
   </div>
</template>

<script>
export default {
    name: "vant-custom-tabbar",
    props: {
       
    },
    data() {
        return {
            active:0
        }
    },
    methods: {
    }
}
</script>
<style lang="less">
</style>


