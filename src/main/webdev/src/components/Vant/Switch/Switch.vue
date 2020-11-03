<template>
   <div>
       <van-switch
            v-model="value"
            :loading="loading"
            :disabled="disabled"
            :size="size"
            :active-color="activeColor"
            :inactive-color="inactiveColor"
            @change="change"
        />
   </div>
</template>

<script>
export default {
    name: "vant-custom-switch",
    props: {

        mainData: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: null
        },
        activeColor: {
            type: String,
            default: '#1989fa'
        },
        inactiveColor: {
            type: String,
            default: '#fff'
        },
    },
    data() {
        return {
            value: false
        }
    },
    watch: {
        mainData: {
            handler(val) {
                this.value = val;
            }
        }
    },
    methods: {
        change(val){
            console.log(val);
            this.$emit("input", val);
        }
    }
}
</script>
<style lang="less">
</style>


