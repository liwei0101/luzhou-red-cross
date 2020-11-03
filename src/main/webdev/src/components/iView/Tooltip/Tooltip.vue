
<template>

    <div class="iview-custom-tooltip-container">
        <Tooltip 
          :placement="placement" 
          :disabled="disabled" 
          :delay="delay" 
          :always="always" 
          :theme="theme" 
          :max-width="maxWidth" 
          :offset="offset" 
          :transfer="transfer" 
          @on-popper-show="onPpopperShow"
           @on-popper-hide="onPopperHide">
            <slot>
            </slot>
            <div slot="content">
              <p>
                <slot name="content">
                </slot>
              </p>
            </div>
        </Tooltip>
    </div>
</template>
<script>
export default {
  name: "iview-custom-tooltip",
  props: {
    placement: {
      type: String,
      default: "top"
    },
    title: {
      type: String,
      default: "提示标题"
    },
    content: {
      type: String,
      default: "提示信息"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    },
    always: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "dark"
    },
    "max-width": {
      type: String,
      default: ""
    },
    offset: {
      type: Number,
      default: 0
    },
    transfer: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onPpopperShow(){
      this.$emit('onPpopperShow')
    },
    onPopperHide(){
      this.$emit('onPopperHide')
    }
    
  },
};
</script>
<style lang="less">
.iview-custom-tooltip-container {
  .tooltip-slot {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>
