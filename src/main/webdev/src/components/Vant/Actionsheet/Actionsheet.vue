<template>
	<div>
		<div  @click='showActionsheet'>
			<slot>
				<van-button type="default" >{{}}</van-button>
			</slot>
		</div>
		<van-actionsheet 
			v-model="show" 
			:lazy-render='lazyRender' 
			:title='title' 
			:close-on-click-overlay='closeOnClickOverlay' 
			:get-container='getContainer' 
			:cancel-text="cancelText" 
			:actions="actions" 
			@select="select" 
			@cancel='cancel' 
		/>
	</div>
</template>

<script>
	export default {
		name: "van-custom-action-sheet",
		props: {
			actions: {
				type: Array,
				default () {
					return [{
					name: '拍照'
					},
					{
						name: '相册',
					}
					]
				}
			},
			'lazy-render': {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				default: ''
			},
			'cancel-text': {
				type: String,
				default: '取消'
			},
			overlay: {
				type: Boolean,
				default: true
			},
			'close-on-click-overlay': {
				type: Boolean,
				default: true
			},
			'get-container': {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				show: false,
			}
		},
		methods: {
			showActionsheet() {
				this.show = true;
			},
			select(item,index) {
				this.show = false
				this.$emit('select',{
					item,index
				})
			},
			cancel() {
				this.show = false;
				this.$emit('onCancel');
			}
		}
	}
</script>

<style lang="less">

</style>
