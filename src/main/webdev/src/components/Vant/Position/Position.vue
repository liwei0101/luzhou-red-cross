<template>
  <div class="vant-customer-positon">
    <div class="_top" :style="'height:'+topHeight">
        <slot name="top"></slot>
    </div>
    <div class="_content"  :style="'padding-top:'+topHeight+'px;padding-bottom:'+bottomHeight+'px;'">
        <slot name="content"></slot>
    </div>
    <div class="_bottom"  :style="'height:'+bottomHeight">
        <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: "vant-customer-positon",
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
    .vant-customer-positon{
        height: 100%;
        width: 100%;
        position:absolute;
        overflow: hidden;
        ._top{
            position: fixed;
            width: 100%;
            top: 0px;
            z-index: 2;
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
        }
    }
</style>


