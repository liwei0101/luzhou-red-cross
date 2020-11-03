<template>
    <div :style="'width:'+width+'px', 'height:'+height+'px'" class="iview-custom-splite-top">
        <Split v-model="value" mode="vertical">
            <slot name="top"></slot>
            <slot name="bottom"></slot>
        </Split>
    </div>
</template>

<script>
  export default {
    name: "iview-custom-splite-top",
    data () {
      return {

      }
    },
    props: {
      value: {
        type: Number,
        default:0.5
      },
      width: {
        type: Number,
        default: 500
      },
      height: {
        type: Number,
        default: 200
      },
      min: {
        type: Number,
        default: 10
      },
      max: {
        type: Number,
        default: 4000
      }
    },
    methods: {

    }
  };
</script>
<style lang="less">

</style>


