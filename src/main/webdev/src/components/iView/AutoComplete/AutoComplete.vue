<template>
  <div>
    <AutoComplete
      v-model="value1"
      :data="data1"
      :clearable="clearable"
      :disabled="disabled"
      :placeholder="placeholder"
      :size="size"
      :icon="icon"
      :placement="placement"
      @on-search="handleSearch"
      @on-change="handleChange"
      @on-select="handleSelect"
      @on-focus="handleFocus"
      @on-blur="handleBlur"
      @on-clear="handleClear"
      :style="'width:'+widthLine+'px !important'"
    >
			<slot>
				
			</slot>
		</AutoComplete>
  </div>
</template>
<script>
export default {
  name: "iview-custom-autoComplete",
  props: {
    value1: {
      type: String,
      default: "1"
    },
    data1: {
      type: Array,
      default: () => {
        return [1, 2, 3, 4, 5];
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: null
    },
    placement: {
      type: String,
      default: "bottom"
    },
    widthLine: {
      type: Number,
      default: 200
    }
  },

  methods: {
    handleSearch(val) {
      this.$emit("handleSearch", val);
    },
    handleChange(val) {
      this.$emit("handleChange", val);
    },
    handleSelect(val) {
      this.$emit("handleSelect", val);
    },
    handleFocus(val) {
      this.$emit("handleFocus", val);
    },
    handleBlur(val) {
      this.$emit("handleBlur", val);
    },
    handleClear(val) {
      this.$emit("handleClear");
    }
  }
};
</script>
