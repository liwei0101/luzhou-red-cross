<style lang="less">
.iview-custom-poptip-container {
  .poptip-slot {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>

<template>

    <div class="iview-custom-poptip-container">
        <Poptip :trigger="trigger" :title="title" :content="content" :placement="placement" :width="width" :confirm="confirm" :ok-text="okText" :cancel-text="cancelText" :popper-class="popperClass" :word-wrap="wordWrap" :padding="padding" :offset="offset" :transfer="transfer" @onPpopperShow="onPpopperShow" @onPopperHide="onPopperHide" @on-ok="onOk" @on-cancel="onCancel">
            <slot>
                <div class="poptip-slot">这里是Poptip</div>
            </slot>
        </Poptip>
    </div>

</template>
<script>
export default {
  name: "iview-custom-poptip",
  props: {
    trigger: {
      type: String,
      default: "click"
    },
    title: {
      type: String,
      default: "标题"
    },
    placement: {
      type: String,
      default: "top"
    },
    content: {
      type: String,
      default: "提示信息"
    },
    "ok-text": {
      type: String,
      default: "确定"
    },
    "cancel-text": {
      type: String,
      default: "取消"
    },
    confirm: {
      type: Boolean,
      default: false
    },
    "popper-class": {
      type: String,
      default: ""
    },
    width: {
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
    },
    "word-wrap": {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: "8px 16px"
    }
  },
  methods: {
    onPpopperShow(){
      this.$emit('onPpopperShow')
    },
    onPopperHide(){
      this.$emit('onPopperHide')
    },
    onOk(){
      this.$emit('onOk')
    },
    onCancel(){
      this.$emit('onCancel')
    }
  },
};
</script>
