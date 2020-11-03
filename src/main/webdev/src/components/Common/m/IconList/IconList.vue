<template>
    <div class="customer-icon-list">
        <div @click="click(item)" class="icon-content" :key="index" v-for="(item,index) in list">
            <img v-if="item[itemSrc]" :style="'border-radius:'+(round?'50%':'0px')+';'" class="icon-img" :src="item[itemSrc]"/>
            <span v-if="item[itemText]" class="icon-title">
                {{item[itemText]}}
            </span>
        </div>
        <div style="height:105px" v-if="list.length%2 !=0" class="icon-content">
        </div>
    </div>
        
</template>

<script>
export default {
    name: "customer-icon-list",
    props: {
        round: {
            type: Boolean,
            default:true
        },
        itemText: {
            type: String,
            default:'title'
        },
        itemSrc: {
            type: String,
            default:'src'
        },
        list: {
            type: Array,
            default: null
        },
    },
    
    methods:{
        click(item){
            this.$emit('click',item);
        }
    }
}
</script>

<style lang="less">
    .customer-icon-list{

        .icon-img { 
            max-width:100%;
            display:block;
            height:74px;
            width:74px;
            margin:0 auto; 
        }
        .icon-title { 
            display:block;
            font-family:PingFangSC-Regular;
            font-size:14px;
            color:#4A4A4A;
            text-align:center;
            padding-top:8px; 
        }
        .icon-content { 
            width:50%;
            text-align:center;
            display:inline-block;
            padding:28px 57px 28px 57px; 
            &:nth-of-type(odd){
                    box-shadow: inset -0.5px -0.5px 0 0 #DDDEE3;
            }
            &:nth-of-type(even){
                    box-shadow: inset 0px -0.5px 0 0 #DDDEE3;
            }
            &:nth-last-child(2){
                box-shadow: inset -0.5px 0 0 0 #DDDEE3;
            }
            &:nth-last-child(1){
                box-shadow: inset -0.5px 0 0 0 #DDDEE3;
            }
        }
        
    }
  
</style>


