<template>
  <div class="vant-customer-position">
    <div class="_top" :style="'height:'+topHeight+'px;'">
        <slot name="top"></slot>
    </div>
    <div class="_content"  :style="'padding-top:'+topHeight+'px;padding-bottom:'+bottomHeight+'px;'">
        <slot name="content"></slot>
    </div>
    <div class="_bottom"  :style="'height:'+bottomHeight+'px;'">
        <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: "vant-customer-position",
    props: {
        topHeight: {
            type: Number,
            default: 40
        },
        bottomHeight: {
            type: Number,
            default: 40
        },
    }
}
</script>

<style lang="less">
    .vant-customer-position{
        height: 100%;
        width: 100%;
        position:absolute;
        overflow: hidden;
        ._top{
            position: fixed;
            width: 100%;
            top: 0px;
            z-index: 2;
            overflow: hidden;
        }
        ._content{
            height: 100%;
            width: 100%;
            overflow: auto;
        }
        ._bottom{
            position: fixed;
            width: 100%;
            bottom: 0;
            z-index: 2;
            overflow: hidden;
        }
    }
</style>


