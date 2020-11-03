<template>
    <div :class="square?'square vant-custom-check':'vant-custom-check'">
        <van-checkbox-group v-model="result" @change="change">
            <van-cell-group :title="title">
                <van-cell
                    v-for="(item, index) in mainData"
                    clickable
                    :key="item[name]"
                    :title="item[text]"
                    @click="toggle(index)"
                >
                    <van-checkbox  :name="item[name]" ref="checkboxes" slot="right-icon" />
                </van-cell>
            </van-cell-group>
        </van-checkbox-group>
    </div>
  
</template>

<script>
export default {
    name: "vant-custom-check-group",
    props: {
        value:{
            type: [String , Array , Number ],
            default: null
        },
        square: {
            type: Boolean,
            default: true
        },
        mainData: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: '多选表单'
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
    data() {
        return {
            result: this.value || [],
        }
    },
    watch:{
        value(val){
            this.result = val
        }
    },
    methods: {
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
        },
        change(val){
            this.$emit('input',this.result);
            this.$emit('change',val)
        }
    }
}
</script>
<style lang="less">
.vant-custom-check .van-cell__value .van-icon{
    height: 20px;
    line-height: 20px;
}
.square{
    .van-checkbox__icon--round .van-icon{
        border-radius: 2px;
    }
}
</style>


