<template>
  <div class="vant-custom-radio-group">
    <van-radio-group v-model="radio">
        <van-cell-group  :title="title" >
            <div v-for="(item,index) in mainData" :key="index">
                <van-cell :title="item[text]" clickable @click="radioClick(item[name])">
                    <van-radio :name="item[name]" />
                </van-cell>
            </div>
        </van-cell-group>
    </van-radio-group>
  </div>
  
</template>

<script>
export default {
    name: "vant-custom-radio-group",
    props: {
        value:{
            type: String,
            default: null
        },
        mainData: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: '单选表单'
        },
        text: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: 'name'
        }
        
    },
    watch:{
        value(val){
            this.radio = val
        }
    },
    data() {
        return {
            radio:this.value || '',
        }
    },
    methods: {
        radioClick(name){
            this.radio = name;
            this.$emit('input',this.radio);
            this.$emit('change',name)
        }
    }
}
</script>
<style lang="less">
.vant-custom-radio-group .van-cell__value .van-icon{
    height: 20px;
    line-height: 20px;
}
</style>


