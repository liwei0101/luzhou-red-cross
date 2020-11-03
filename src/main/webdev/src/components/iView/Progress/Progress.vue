<style lang="less">
.iview-custom-progress-container{
    .progress-slot{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
}
</style>


<template>
  <div class="iview-custom-progress-container">
      <Progress :percent="percent" :status="status" :stroke-width="strokeWidth" :stroke-color="strokeColor" :hide-info="hideInfo" :vertical="vertical" :success-percent="successPercent">
        <slot><div class="progress-slot">这里可以放文字和icon</div></slot>
      </Progress>  
  </div>
</template>

<script>
    export default {
      name: "iview-custom-progress",
      props:{
        percent:{
          type: Number,
          default: 0
        },
        status:{
           type: String,
           default: 'normal'
        },
        'stroke-width': {
            type: Number,
            default: 10
        },
        'stroke-color':{
            type: String,
            default: ''
        },
        'hide-info':{
            type:Boolean,
            default: false
        },
        'vertical':{
           type:Boolean,
            default: false
        },
        'success-percent':{
            type: Number,
            default: 0
        }
      }
    }
</script>
