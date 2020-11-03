<template>
    <div :class="triggerType"></div>
    <!-- <div :class="trigger"></div> -->
</template>

<script>
  import MobileSelect from 'mobile-select' 
  export default {
    name: 'Cascade',
    props: {
      triggerType: {
        type: String,
        default: '.cascade'
      },
			title: {
				type:String,
				default: ''
      },
      position: {
        type: Array,
        default: ()=>{
          return []
        }
      },
      sureText: {
        type: String,
				default: '确认'
      },
      cancelText: {
        type: String,
				default: '取消'
      },
      sureColor: {
        type: String,
				default: '#1e83d3'
      },
      cancelColor: {
        type: String,
				default: '#666666'
      },
      titleColor: {
        type: String,
				default: '#000000'
      },
      titleBgColor: {
        type: String,
				default: '#ffffff'
      },
      textColor: {
        type: String,
				default: '#000000'
      },
      bgColor: {
        type: String,
				default: '#ffffff'
      },
			keys: {
				type: String,
				default: ''
			},
			selectVal: {
				type: String,
				default: ''
			},
			children: {
				type: String,
				default: ''
      },
      dataList: {
        type: Array,
        default:()=>{
          return []
        }
      }
		},
    data() {
      return {
        mobileSelect4: null
      }
    },
    mounted() {
      this.mobileSelect4 = new MobileSelect({
        trigger: this.triggerType,
        title: this.title,
        position: this.position,
        ensureBtnText: this.sureText,
        cancelBtnText: this.cancelText,
        ensureBtnColor: this.sureColor,
        cancelBtnColor: this.cancelColor,
        titleColor: this.titleColor,
        titleBgColor:this.titleBgColor,
        textColor:this.textColor,
        bgColor:this.bgColor,
        keyMap: {
            id:this.keys,
            value: this.selectVal,
            childs :this.children
        },   
       callback:(indexArr, date) =>{
					this.$emit('result',indexArr,date);
				},
        wheels: this.dataList,
      })
    },
  }
</script>

<style lang="" scoped>
  
</style>