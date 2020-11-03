<template>
	<div style="padding:5px 10px;">
		<Breadcrumb :separator="separator">
			<BreadcrumbItem :to="item.to" :target='item.target' :replace='item.replace' v-for='item in BreadcrumbItemList'>
				<Icon :type="item.icon" v-if='item.icon'></Icon>
				{{item.text}}
			</BreadcrumbItem>
		</Breadcrumb>
	</div>
</template>

<script>
export default {
	name: 'iview-custom-breadcrumb',
	props: {
		separator: {
			type: String,
			default: "<b class='demo-breadcrumb-separator'>=></b>"
		},
		BreadcrumbItemList: {
			type: Array,
			default() {
				return [
					{
						to: '',
						icon:'ios-home-outline',
						text:'Home',
						replace: false,
						target: '_self',
					},
					{
						to: '',
						icon:'logo-buffer',
						text:'Components',
						replace: false,
						target: '_self',
					},
					{
						to: '',
						icon:'ios-cafe',
						text:'Breadcrumb',
						replace: false,
						target: '_self',
					},
				];
			}
		}
	},
	data() {
		return {};
	},
	methods: {
		
	}
};
</script>

<style lang="less"></style>
