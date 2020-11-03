<template>
    <van-popup position="bottom"  v-model="show">
        <van-area 
            :value="areaValue"
            :title="title"
            :columns-num="columnsNum"
            :loading="loading"
            :item-height="itemHeight"
            :visible-item-count="visibleItemCount"
            :area-list="areaList"
            :confirm-button-text="confirmButtonText"
            :cancel-button-text="cancelButtonText"
            @confirm="confirm"
            @cancel="cancel"
            @change="change"
        />
    </van-popup>
</template>

<script>
import areaData from './area.js'
export default {
    name: "vant-custom-area",
    props: {
        showDig:{
            type: Boolean,
            default: false
        },
        areaValue:{
            type: Boolean,
            default: null
        },
        areaList:{
            type: Object,
            default: areaData
        },
        title:{
            type: String,
            default: null
        },
        columnsNum:{
            type: String,
            default: null
        },
        loading:{
            type: Boolean,
            default: false
        },
        itemHeight:{
            type: Number,
            default: null
        },
        visibleItemCount:{
            type: Number,
            default: null
        },
        confirmButtonText:{
            type: String,
            default: null
        },
        cancelButtonText:{
            type: String,
            default: null
        },
    },
    data() {
        return {
            show:false,
        }
    },
    watch: {
        showDig: {
            handler(val) {
                this.show = val;
            }
        }
    },
    methods: {
        confirm(value, index){
            this.show = false;
            this.$emit('input',false);
            this.$emit('confirm',{
                value, index
            });
        },
        change(picker, value, index){
            this.$emit('change',{
                picker, value, index
            });
        },
        cancel(){
            this.show = false;
            this.$emit('input',false);
            this.$emit('cancel');
        }
    }
}
</script>

<style lang="less">
  
</style>
