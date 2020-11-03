<template>
  <div class="number-keyboard">
		 <van-password-input v-show="numberType" @click="showDateTime" :value="values"
							 :mask="mask"/>
    <van-cell v-show="!numberType" icon @click="showDateTime" :title="title" :value="values" label/>
    <van-number-keyboard
			:theme="theme" 
			:show="show" 
			:transition="transition"
			:extra-key="extraKey"
			:close-button-text="closeButtonText"
			:delete-button-text="deleteButtonText"
			:show-delete-key="showDeleteKey"
			:hide-on-click-outside="hideOnClickOutside"
			@blur="showDateFalse" 
			@input="onInput" 
			@delete="onDelete"/>
    <!-- 
    :transition="transition"
    :z-index='zIndex'
    :extra-key="extraKey"
    :close-button-text="closeButtonText"
    :delete-button-text="deleteButtonText"
    :show-delete-key="showDeleteKey"
    :hide-on-click-outside="hideOnClickOutside"
    -->
  </div>
</template>

<script>
import { dateFormat } from "@/libs/date";
export default {
  name: "vant-custom-number-keyboard",
  props: {
      value:{
          type: [String , Number ],
          default: ''
      },
		numberType: {
			type: Boolean,
			default: false
		},
    theme: {
      type: String,
      default: "default"
    },
      mask: {
          type: Boolean,
          default: true
      },
    title: {
      type: String,
      default: "输入数字"
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
      default: "."
    },
    deleteButtonText: {
      type: String,
      default: "删除"
    },
    closeButtonText: {
      type: String,
      default: "完成"
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      values: this.value || '',
      show: false,
      dateTime: 1
    };
  },
    watch:{
        value(val){
            this.values = val;
        }
    },
  methods: {
    showDateFalse() {
      this.show = false;
    },
    showDateTime() {
      this.show = !this.show;
    },
    onInput(value) {
        if(this.values==0){
            this.values = '';
        }
        if(this.numberType){
            this.values = (this.values.toString() + value).slice(0,6);
        }else{
            this.values = (this.values.toString() + value).slice(0,20);
        }
        this.$emit('input',this.values)
    },
    onDelete() {
			this.values = this.values.slice(0, this.values.length - 1);
        this.$emit('input',this.values)
    }
  }
};
</script>
<style lang="less">
.number-keyboard {
  .van-number-keyboard {
    /*position: absolute !important;*/
  }
}
</style>


