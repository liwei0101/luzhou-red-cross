<template>
	<div>
		 <Cascader 
			:data="data" 
			:value="value"
			:disabled="disabled"
			:clearable="clearable"
			:placeholder="placeholder"
			:trigger="trigger"
			:change-on-select="changeSelect"
			:size="size"
			:filterable="filterable"
			:not-found-text="notDate"
			@on-change="handleChange"
			@on-visible-change="handleVisibleChange"
			style="width:200px;">
		 </Cascader>
	</div>
</template>
<script>
export default {
	name:'iview-custom-cascader',
	props: {
		data: {
			type: Array,
			dafault: ()=> {
				return []
			}
		},
		value:{
			type: Array,
			dafault: ()=> {
				return []
			}
		},
		disabled: {
			type: Boolean,
			default: false
		},
		clearable: {
			type: Boolean,
			default: true
		},
		placeholder: {
			type: String,
			default: "请选择"
		},
		trigger: {
			type: String,
			default: "click"
		},
		changeSelect: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: null
		},
		filterable: {
			type: Boolean,
			default: false
		},
		notDate: {
			type: String,
			default: "无匹配数据"
		}
	},
	methods: {
		handleChange (val,data) {
			this.$emit('handleChange',val,data)
		},
		handleVisibleChange (val) {
			this.$emit('handleOpenChange',val)
		}
	}
}
</script>