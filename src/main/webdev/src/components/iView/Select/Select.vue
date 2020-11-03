<template>
    <div style="display: inline-block;">
        <Select
                v-if="!remote"
                :style="'width:'+selectWidth+'!important'"
                :multiple="multipType"
                :placeholder="placeholder"
                :clearable="clearable"
                :filterable="filterable"
                :disabled="disabled"
                :size = "size"
                v-model="selectValue"
                @on-change="onChange"
                @on-query-change="onQueryChange"
                @on-clear="onClear"
                @on-open-change="onOpenChange"
        >
            <Option v-for="item in list" :value="item[optionValue]" :key="item[optionValue]">{{ item[optionLabel] }}</Option>
        </Select>
        <Select v-if="remote"
                :style="'width:'+selectWidth+'!important'"
                :multiple="multipType"
                :placeholder="placeholder"
                :clearable="clearable"
                v-model="selectValue"
                :filterable="filterable"
                :remote="remote"
                :loading="loading"
                :remote-method="remoteMethod"
                :disabled="disabled"
                :size = "size"
                @on-change="onChange"
                @on-query-change="onQueryChange"
                @on-clear="onClear"
                @on-open-change="onOpenChange"
        >
            <Option v-for="item in list" :value="item[optionValue]" :key="item[optionValue]">{{ item[optionLabel] }}</Option>
        </Select>
    </div>
</template>
<script>
    export default {
        name: "iview-custom-select",
        props: {
            value: [String, Number, Array],
            optionLabel: {
                type: String,
                default: "label"
            },
            optionValue: {
                type: String,
                default: "value"
            },
            list: {
                type: Array,
                default: () => {
                    return [];
                }
            },
             size: {
                type: String,
                default: null
            },
            selectWidth: {
                type: String,
                default: '100%'
            },
            multipType: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            filterable: {
                type: Boolean,
                default: false
            },
            remote: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
        },
        data(){
          return {
              selectValue:null
          }
        },
        watch:{
            value(val){
                this.selectValue  = val
            }
        },
        created(){
          this.selectValue  = this.value
        },
        computed: {},
        methods: {
            onQueryChange(query) {
                this.$emit('onQueryChange', query);
            },
            onChange(value) {
                this.$emit('input', value);
                this.$emit('onChange', value);
            },
            onClear() {

            },
            onOpenChange(isOpen) {
                this.$emit('onOpenChange', isOpen);
            },
            remoteMethod() {
                this.$emit('remoteMethod');
            }
        }

    };
</script>
<style>
</style>