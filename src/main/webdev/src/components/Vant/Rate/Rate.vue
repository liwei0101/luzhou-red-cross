<template>
  <div class="vant-custom-rate">
      <van-rate
              v-model="rateValue"
              :count="count"
              :size="size"
              :color="color"
              :void-color="voidColor"
              :icon="icon"
              :void-icon="voidIcon"
              :allow-half="allowHalf"
              :readonly="readonly"
              :disabled="disabled"
              :disabled-color="disabledColor"
              @change="onChange"
      />
  </div>
</template>

<script>
export default {
    name: "vant-custom-rate",
    props: {
        value:{
            type:Number,
            default:2
        },
        count:{
            type:Number,
            default:5
        },
        size:{
            type:Number,
            default:20
        },
        color:{
            type:String,
            default:'#ffd21e'
        },
        voidColor:{
            type:String,
            default:'#c7c7c7'
        },
        icon:{
            type:String,
            default:'star'
        },
        'voidIcon':{
            type:String,
            default:'star-o'
        },
        allowHalf:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        },
        disabledColor:{
            type:String,
            default:'#bdbdbd'
        },
    },
    data() {
        return {
            rateValue:this.value
        }
    },
    methods: {
        onChange (value){
            //this.$props.value = value;
            this.rateValue=value;
            this.$emit('change',{value});
        },
    }
}
</script>
<style lang="less">
</style>


