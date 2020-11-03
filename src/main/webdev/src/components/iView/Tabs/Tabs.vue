<template>
    <div class="iview-custom-tabs" :class="isScreen?'iview-custom-tab':''">
        <Tabs :v-model="vModel" :value="value" :type="type" :size="size" :closable="closable" :animated="animated" :capture-focus="captureFocus" :before-remove="beforeRemove"    @on-click="onclick" @on-tab-remove="onTabRemove">
            <slot></slot>
        </Tabs>
        <div v-if="isScreen" class="tabs-screen" :style="'width:' + width + 'px'" @click="scrclick">
            <slot name="screen"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "iview-custom-tabs",
    props: {
      vModel: {
        type: String,
        default: '0'
      },
      value: {
        type: String,
        default: '0'
      },
      type: {
        type: String,
        default: 'line'
      },
      size: {
        type: String,
        default: 'default'
      },
      closable: {
        type: Boolean,
        default: false
      },
      animated: {
        type: Boolean,
        default: true
      },
      captureFocus: {
        type: Boolean,
        default: false
      },
      isScreen: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 100
      }
    },
    data() {
      return {
      }
    },
    mounted () {

    },
    methods: {
      onclick(name){
        this.$emit('onClick', name)
      },
      onTabRemove(name){
        this.$emit('onTabRemove', name)
      },
      beforeRemove(){
        this.$emit('beforeRemove')
      },
      scrclick( params){
        this.$emit('scrclick', params)
      }
    },
    watch: {

    }
  }
</script>
<style lang="less">
    .iview-custom-tabs{
        position: relative;
        .tabs-screen{
            text-align: center;
            height: 38px;
            line-height: 38px;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 100;
            cursor: pointer;
        }
    }
    .iview-custom-tab{
        .ivu-tabs-nav-container{
            margin-right: 100px;
        }
    }
</style>
