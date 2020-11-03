<template>
    <div class="customer-normal-icon-list" style="width:100%;over-flow:hidden;">
        <div style="overflow-x: auto;">
            <div :style="count=='more'?'width:'+75*list.length+'px':''">
                <div :style="count=='more'?'width:75px':'width:'+100/(count-0)+'%'" @click="click(item)" class="icon-content" :key="index" v-for="(item,index) in list">
                    <img v-if="item[itemSrc]" :style="'border-radius:'+(round?'50%':'0px')+';'" class="icon-img" :src="item[itemSrc]"/>
                    <span v-if="item[itemText]" class="icon-title">
                        {{item[itemText]}}
                    </span>
                </div>
            </div>
        </div>
        
        
    </div>
        
</template>

<script>
export default {
    name: "customer-normal-icon-list",
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
        count:{
            type:[Number,String],
            default:3
        }
    },
    
    methods:{
        click(item){
            this.$emit('click',item);
        }
    }
}
</script>

<style lang="less">
    .customer-normal-icon-list{
        padding: 0 0 16px 0;
        .icon-content { 
            padding-top: 16px;
            text-align:center;
            display:inline-block;
        }
        .icon-img { 
            max-width:100%;
            display:block;
            height:42px;
            width:42px;
            margin:0 auto; 
        }
        .icon-title { 
            display:block;
            padding-top:4px; 
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #4A4A4A;
            text-align: center;
        }
        
        
    }
  
</style>


