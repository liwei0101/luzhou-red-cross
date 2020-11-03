<template>
  <div>
    <van-cell 
        :icon="leftIcon" 
        @click="showPopp" 
        :title="title" 
        :value="cellValue.text?cellValue.text:cellValue"
        :is-link="isLink"
        :required="required"
    />
    <div v-show="false">解决vant-cell不显示border的bug</div>
    <van-popup position="bottom"  v-model="show">
        <van-picker  ref="picker"
            :columns="list" 
            @change="onChange" 
            @confirm="confirm" 
            @cancel="cancel"
            :show-toolbar="showToolbar"
            :title="selectTitle"
            :loading="loading"
            :default-index="defaultIndex"
            :visible-item-count="visibleItemCount"
            :confirm-button-text="confirmButtonText"
            :cancel-button-text="cancelButtonText"
        />
    </van-popup>
  </div>
</template>

<script>
export default {
    name: "vant-custom-select-data",
    props: {
        value:{
            type: [Object,String],
            default: null
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        columns: {
            type: Array,
            default:  () => {
                return [{
                    text: '杭州',
                    id:1
                }, {
                    text: '杭州2',
                    id:3
                }, {
                    text: '杭州3',
                    id:4
                }, {
                    text: '杭州4',
                    id:5
                }, {
                    text: '杭州5',
                    id:56
                }]
            }
        },
        showToolbar: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '选择框'
        },
        selectTitle: {
            type: String,
            default: ''
        },
        isLink: {
            type: Boolean,
            default: true
        },
        leftIcon: {
            type: String,
            default: ''
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
        required: {
          type: Boolean,
          default: false
        },
        selectValue:{
            type: String,
            default: 'text'
        },
        selectKey:{
            type: String,
            default: 'id'
        },
        returnType:{
            type: String,
            default: 'object'
        },
    },
    data() {
        return {
            
            defaultIndex:0,
            index_:'',
            show:false,
            defaultValue:null ,
        }
    },
    watch: {
        value: {
            handler(val) {
                

            }
        }
    },
    mounted(){
        
    },
    computed:{
        cellValue(){
            this.defaultValue = 0;
            if(typeof this.list[0] == 'string'){
                this.defaultValue = this.list.indexOf(this.value)
            }else if(typeof this.list[0] == 'object'){
                this.list.findIndex((item,index)=>{
                    if(this.returnType == 'selectKey'){
                        if(this.value && this.value === item[this.selectKey]){
                            this.defaultIndex = index;
                        }
                    }else if(this.returnType == 'selectValue'){
                        if(this.value && this.value  === item[this.selectValue]){
                            this.defaultIndex = index;
                        }
                    }else if(this.returnType == 'object'){
                        if(this.value && this.value.id === item.id){
                            this.defaultIndex = index;
                        }
                    }
                });
            }

            return this.value  ?  this.value :  this.defaultValue ? this.defaultValue : this.placeholder
        },
        list(){
            let list_ = [];
            if(Object.prototype.toString.call(this.columns) == '[object Array]'){
                if(typeof this.columns[0] == 'string'){
                    list_ = this.columns;
                }else{
                    
                    for(var index in this.columns){
                        let item = this.columns[index];
                        list_.push(Object.assign(
                            {
                                text:item[this.selectValue],
                                id:item[this.selectKey],

                            },item));
                    }
                }
            }else{
                list_ = this.columns;
            }
            console.log(list_);
            return list_;
        }
    },
    methods: {
        showPopp (){
            this.show = !this.show;
        },
        returnValue(value){
            let value_ = value;
            if(this.returnType == 'selectKey'){
                value_ = value[this.selectKey]
            }else if(this.returnType == 'selectValue'){
                value_ = value[this.selectValue]
            }
            return value_;
        },
        confirm(value, index){
            let value_ = this.returnValue(value);
            this.defaultValue = value_;            
            this.$emit('input',this.returnValue(value));
            this.$emit('onConfirm',{
                value:this.returnValue(value), index
            });
            this.showPopp();
        },
        onChange(picker, value, index){
            this.$emit('onChange',{
                picker, value,index
            });
        },
        cancel(){
            this.showPopp();
            this.$emit('onCancel');
        }
    }
}
</script>

<style lang="less">
  
</style>
