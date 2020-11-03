<template>
  <!-- <div> -->
    <Radio 
			:value="value"
			:label="label"
			:disabled="disabled"
			:size="size"
			:true-value="trueVal"
			:false-value="falseVal"
			@on-change="change">
			{{label}}
		</Radio>
  <!-- </div> -->
</template>
<script>
export default {
  name: "iview-custom-radio",
  props: {
		value: {
			type: Boolean,
			default: false
		},
		label: {
			type: String,
			default: '选项一'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: null
		},
		trueVal: {
			type: Boolean,
			default: true
		},
		falseVal: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		change (val) {
			this.$emit('change', val)
			this.$emit('input', val)
		}
	}
};
</script>