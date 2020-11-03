<template>
    <div>
        <!-- 密码输入框 -->
        <van-password-input
                :value="values"
                :length="length"
                :mask="mask"
                :info="info"
                :error-info="errorInfo"
                @focus="showKeyboard = true"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard
                :show="showKeyboard"
                :theme="theme"
                :transition="transition"
                :z-index = 'zIndex'
                :extra-key="extraKey"
                :close-button-text="closeButtonText"
                :delete-button-text="deleteButtonText"
                :show-delete-key="showDeleteKey"
                :hide-on-click-outside="hideOnClickOutside"
                @input="onInput"
                @delete="onDelete"
                @blur="onblur"
                @close="onclose"
                @show="onshow"
                @hide="onhide"
        />
    </div>
</template>

<script>
  export default {
    name: "vant-custom-pass-word",
    props: {
        value:{
            type: [String , Number ],
            default: ''
        },
      length: {
        type: Number,
        default: 6
      },
      mask: {
        type: Boolean,
        default: true
      },
      info: {
        type: String,
        default: '密码为 6 位数字'
      },
      errorInfo: {
        type: String,
        default: ''
      },
      theme: {
        type: String,
        default: 'default'
      },
      title: {
        type: String,
        default: ''
      },
      transition: {
        type: Boolean,
        default: true
      },
      zIndex: {
        type: Number,
        default: 100
      },
      extraKey: {
        type: String,
        default: '#'
      },
      closeButtonText: {
        type: String,
        default: '完成'
      },
      deleteButtonText: {
        type: String,
        default: '删除'
      },
      showDeleteKey: {
        type: Boolean,
        default: true
      },
      hideOnClickOutside: {
        type: Boolean,
        default: true
      },
        autoCloseKeyboard:{
            type: Boolean,
            default: false
        }
    },
    data() {
      return {
        values: this.value || '',
        showKeyboard: false
      }
    },
      watch:{
        value(val){
            this.values = val;
        }
      },
      created(){
        console.log('mask',this.mask)
      },
    methods: {
      onInput(key) {
        this.values = (this.values.toString() + key).slice(0, 6);
          this.$emit('input', this.values)
          if(this.values.length>=6 && this.autoCloseKeyboard){
            this.onblur();
        }
      },
      onDelete() {
        this.values = this.values.slice(0, this.values.length - 1);
        this.$emit('delete', this.values)
      },
      onblur() {
        this.showKeyboard = false;
        this.$emit('blur', this.values)
      },
      onshow() {
        this.$emit('show', this.values)
      },
      onhide() {
        this.$emit('hide', this.values)
      },
      onclose() {
        this.$emit('close', this.values)
      }
    }
  }
</script>
<style lang="less">
    .van-number-keyboard{
        /*position: absolute;*/
    }
</style>

