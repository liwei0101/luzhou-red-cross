<template>
  <div>
    <van-steps 
        :active="active"
        :title="title"
        :direction="direction"
        :icon="icon"
        :icon-class="iconClass"
        :active-color="activeColor"
        :active-icon="activeIcon"
        
        >
        <van-step v-for="(item,index) in mainData" :key="index">{{item.title}}</van-step>
    </van-steps>

  </div>
  
</template>

<script>
import { dateFormat } from '@/libs/date'
export default {
    name: "vant-custom-step",
    props: {
        mainData: {
            type: Array,
            default: [
                {
                  title:'买家下单'  ,
                  name:1
                },
                {
                  title:'商家接单'  ,
                  name:2
                },
                {
                  title:'买家提货'  ,
                  name:3
                },
                {
                  title:'交易完成'  ,
                  name:3
                },
            ]
        },
        active: {
            type: Number,
            default: 1
        },
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        iconClass: {
            type: String,
            default: ''
        },
        direction: {
            type: String,
            default: 'horizontal'
        },
        activeColor: {
            type: String,
            default: '#38f'
        },

        activeIcon: {
            type: String,
            default: 'success'
        },
        
    },
    data() {
        return {
            test:1,
            show:false,
            dateTime:1
        }
    },
    methods: {
        showDateTime (){
            this.show = !this.show;
        },
        onInput(value) {
            console.log(value);
            this.test = value;
        },
        onDelete() {

        }
    }
}
</script>
<style lang="less">
</style>


