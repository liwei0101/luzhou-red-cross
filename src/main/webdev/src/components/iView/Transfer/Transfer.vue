<template>
  <div>
    <Transfer
      :data="data1"
      :target-keys="targetKeys1"
			:selected-keys="selectedKeys"
			:title="title"
			:operations="operations"
			:filterable="filterable"
			:filter-placeholder="filterPlaceholder"
			:not-found-text="noDate"
      @on-change="handleChange1"
			@on-selected-change="onSelectChange"
    ></Transfer>
  </div>
</template>
<script>
export default {
  name: "iview-custom-transfer",
  props: {
		data1: {
			type: Array,
			default: ()=> {
				return []
			}
		},
		targetKeys1: {
			type: Array,
			default: ()=> {
				return []
			}
		},
		selectedKeys: {
			type: Array,
			default: () => {
				return []
			}
		},
		title: {
			type: Array,
			default: () => {
				return ['源列表', '目的列表']
			}
		},
		operations: {
			type: Array,
			default: () => {
				return []
			}
		},
		filterable: {
			type: Boolean,
			default: false
		},
		filterPlaceholder: {
			type: String,
			default: "请输入搜索内容"
		},
		noDate: {
			type: String,
			default: "列表为空"
		}
	},
  methods: {
		handleChange1 (newTargetKeys) {
			this.targetKeys1 = newTargetKeys;
			this.$emit('handleChange1',newTargetKeys)
		},
		onSelectChange (sourceSelectedKeys, targetSelectedKeys) {
			this.$emit('onSelectChange',sourceSelectedKeys,targetSelectedKeys)
		}
	}
};
</script>