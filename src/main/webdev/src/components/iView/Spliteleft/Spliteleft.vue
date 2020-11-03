<template>
    <div :style="'width:'+width+'px', 'height:'+height+'px'" class="iview-custom-splite-left">
        <Split v-model="value">
            <slot name="left"></slot>
            <slot name="right"></slot>
        </Split>
    </div>
</template>

<script>
  export default {
    name: "iview-custom-splite-left",
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
        default: 40
      },
      max: {
        type: Number,
        default: 40
      }
    },
    methods: {

    }
  };
</script>
<style lang="less">
  .iview-custom-splite-left{
      .demo-split{
          height: 200px;
          border: 1px solid #dcdee2;
      }
      .demo-split-pane{
          padding: 10px;
      }
  }
    
</style>


