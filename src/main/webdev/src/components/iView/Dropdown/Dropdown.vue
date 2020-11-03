<template>
	<div style="padding:5px 10px;display: inline-block;">
		<Dropdown @on-click='onClick' @on-visible-change='onVisibleChange' @on-clickoutside='onClickoutside' :trigger='trigger' :visible='visible' :placement='placement' :transfer='transfer' :transfer-class-name='transferClassName' v-model="value">
			<a href="javascript:void(0)">
				<span v-if="title">{{title}}</span>
				<Icon :type="icon"></Icon>
			</a>
			<MyDropdownMenu :DropdownItemList="DropdownItemList" slot="list"></MyDropdownMenu>
		</Dropdown>
	</div>
</template>

<script>
	import MyDropdownMenu from './DropdownMenu'
export default {
	name: 'iview-custom-dropdown',
	props: {
		value: {
		  type: String,
		  default: ''
		},
		title: {
			type: String,
			default: null
		},
		icon:{
		    type: String,
			default:'ios-arrow-down'
		},
		trigger: {
			type: String,
			default: 'hover'
		},
		visible: {
			type: Boolean,
			default: false
		},
		placement: {
			type: String,
			default: 'bottom'
		},
		transfer: {
			type: Boolean,
			default: false
		},
		transferClassName:{
			type: String,
			default: ''
		},
		DropdownItemList:{
			type: Array,
			default(){
				return [{
					name:'驴打滚',
					disabled:false,
					divided:false,
					selected:false
				},{
					name:'炸酱面',
					disabled:false,
					divided:false,
					selected:false
				},{
					name:'豆汁儿',
					disabled:false,
					divided:false,
					selected:false
				},{
					name:'冰糖葫芦',
					disabled:true,
					divided:false,
					selected:false
				},{
					name:'北京烤鸭',
					disabled:false,
					divided:false,
					selected:false
				}]
			}
		}

	},
    components: {
        MyDropdownMenu
	},
	data() {
		return {};
	},
	methods: {
		onClick(name) {
			this.$emit('on-click', name);
		},
		onVisibleChange(visible) {
			this.$emit('on-visible-change', visible);
		},
		onClickoutside(event) {
			this.$emit('on-clickoutside', event);
		},
	}
};
</script>

<style lang="less"></style>
