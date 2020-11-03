<template>
  <div>
    <DatePicker
      :type="typeList"
      :value="value"
      :format="format"
      :placement="placement"
      :placeholder="placeholder"
      :options="options"
      :split-panels="splitPanels"
      :multiple="multiple"
      :show-week-numbers="showWeek"
      :start-date="startDate"
      :confirm="confirm"
      :open="open"
      :size="size"
      :disabled="disabled"
      :clearable="clearable"
      :readonly="readonly"
      :editable="editable"
      :separator="separator"
      @on-change="handleChange"
			@on-open-change="handleOpenChange"
			@on-ok="handleOk"
			@on-clear="handleClear"
			@on-clickoutside ="handleClickoutside"
      style="width: 200px"
    ></DatePicker>
  </div>
</template>
<script>
export default {
  name: "iview-custom-datePicker",
  props: {
    typeList: {
      type: String,
      default: "date"
    },
    value: {
      type: Date,
      default: () => {
        return new Date();
      }
    },
    format: {
      type: String,
      default: "yyyy-MM-dd"
    },
    placement: {
      type: String,
      default: "bottom-start"
    },
    placeholder: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    splitPanels: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    showWeek: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: Date,
      default: () => {
        return new Date();
      }
    },
    confirm: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: null
    },
    size: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ""
    }
  },
  methods: {
		handleChange (val) {
			this.$emit('handleChange',val)
		},
		handleOpenChange (val) {
			this.$emit('handleOpenChange',val)
		},
		handleOk () {
			this.$emit('handleOk')
		},
		handleClear () {
			this.$emit('handleClear')
		},
		handleClickoutside (val) {
			this.$emit('handleClickoutside',val)
		}
	}
};
</script>