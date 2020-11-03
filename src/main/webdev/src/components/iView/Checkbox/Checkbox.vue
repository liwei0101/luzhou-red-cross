<template>
  <Checkbox
    :value="value"
    :label="label"
    :disabled="disabled"
    :indeterminate="indeterminate"
    :size="size"
    :true-value="trueVal"
    :false-value="falseVal"
   	@on-change="change">
		{{label}}
	</Checkbox>
</template>
<script>
export default {
  name: "iview-custom-checkbox",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "选项一"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    indeterminate: {
      type: Boolean,
      default: false
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
    change(val) {
		this.$emit("change", val);
		this.$emit("input", val);
    }
  }
};
</script>