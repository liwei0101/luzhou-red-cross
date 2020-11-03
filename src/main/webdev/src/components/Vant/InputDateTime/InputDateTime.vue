<template>
  <div>

    <van-cell
        :icon="leftIcon"
        @click="showDateTime"
        :title="title"
        :value="cellValue"
        :is-link="isLink"
        :required="required"
    />
    <div v-show="false">解决vant-cell不显示border的bug</div>
    <van-popup position="bottom"  v-model="show">
        <van-datetime-picker
            :formatter="formatter"
            v-model="currentDate"
            :type="type"
            :title="dateTitle"
            :show-toolbar='showToolbar'
            :confirm-button-text="confirmButtonText"
            :cancel-button-text="cancelButtonText"
            :visible-item-count="visibleItemCount"
            :max-date="maxDate"
            :min-date="minDate"
            @change="change"
            @confirm="confirm"
            @cancel="cancel"
        />
    </van-popup>
    <!-- :max-minute="maxMinute"
    :min-minute="minMinute"
    :max-hour="maxHour"
    :min-hour="minHour"
    :max-date="maxDate"
    :min-date="minDate"
    :title="dateTitle"
    :show-toolbar='showToolbar'
    :loading='loading'
    :item-height="itemHeight"
    :confirm-button-text="confirmButtonText"
    :cancel-button-text="cancelButtonText"
    :visible-item-count="visibleItemCount" -->
  </div>
</template>

<script>
import { dateFormat } from '@/libs/date'
export default {
    name: "vant-custom-datetime",
    props: {
        value:{
            type: [String , Array , Number ],
            default: null
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        title: {
            type: String,
            default: '日期'
        },
        type: {
            type: String,
            default: 'dateTime'
        },
        dateTitle: {
            type: String,
            default: ''
        },
        maxMinute: {
            type: String,
            default: '59'
        },
        minMinute: {
            type: String,
            default: '0'
        },
        maxHour: {
            type: String,
            default: '23'
        },
        minHour: {
            type: String,
            default: '0'
        },
        maxDate: {
            type: Date,
            // default: new Date(new Date().getFullYear()+1,11,31)
        },
        minDate: {
            type: Date,
            // default: new Date(new Date().getFullYear()-10,0,1)
        },
        showToolbar: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        itemHeight: {
            type: Number,
            default: 44
        },
        confirmButtonText: {
            type: String,
            default: '确定'
        },
        cancelButtonText: {
            type: String,
            default: '取消'
        },
        visibleItemCount: {
            type: Number,
            default: 5
        },
        format: {
            type: Boolean,
            default: true
        },
        leftIcon: {
            type: String,
            default: null
        },
        isLink: {
            type: Boolean,
            default: true
        },
        required: {
          type: Boolean,
          default: false
        }
        // arrowDirection: {
        //     type: String,
        //     default: 'arrow'
        // },
    },
    data() {
        return {
            currentDate:'',
            picker_:'',
            show:false,
            defaultValue:null ,
            // dateTime:'请选择生日'
        }
    },
    computed:{
        cellValue:{
            get(){
                return this.value ? this.value : this.defaultValue ? this.defaultValue : this.placeholder;
            }
        }
    },
    methods: {
        showDateTime (){
            if(this.value){
                this.currentDate = new Date(this.value);
            } 
            this.show = !this.show;
        },
        formatter(type, value) {
            if(this.format){
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                } else if (type === 'day') {
                    return `${value}日`
                } else if (type === 'hour') {
                    return `${value}时`
                } else if (type === 'minute') {
                    return `${value}分`
                }
            }
            console.log(value);
            return value;
        },
        confirm(value){
            this.showDateTime();
            let formatData = 'yyyy-MM-dd hh:mm';
            if(this.type === 'date'){
                formatData = 'yyyy-MM-dd';
            }else if(this.type === 'time'){
                formatData = 'hh:mm';
            }else if(this.type === 'year-month'){
                formatData = 'yyyy-MM';
            }
            if(this.picker_){
                this.selectValue = this.picker_.getValues();
            }
            this.defaultValue = dateFormat(formatData,value);
            this.$emit('input',dateFormat(formatData,value));
            this.$emit('onConfirm',{
                value
            });
        },
        cancel(){
            this.showDateTime();
            this.picker_.setValues(this.selectValue)
            this.$emit('onCancel');
        },
        change(picker){
            this.picker_ = picker;
        }
    }
}
</script>

<style lang="less">
    .van-cell__value .van-icon{
        height: 24px;
        min-width: 1em;
        font-size: 16px;
        line-height: 24px;
    }
</style>


