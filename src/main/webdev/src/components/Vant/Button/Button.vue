<template>
	<div>
		<van-button 
            :type="type"
            :size="size"
            :tag="tag"
            :native-type='nativeType'
            :block="block"
            :plain="plain"
            :square="square"
            :round="round"
            :disabled="disabled"
            :hairline="hairline"
            :loading="loading"
            :loading-text="loadingText"
            :loading-size="loadingSize"
            :url="url"
            :to="to"
			:text="text"
            :replace='replace'
            @click="click"
            @touchstart="touchstart"
            >
            <slot>
				
			</slot>
        </van-button>
	</div>
</template>

<script>
	export default {
		name: "van-custom-botton",
		props: {
			type: {
				type: String,
				default: 'default'
			},
            size: {
				type: String,
				default: 'default'
			},
            tag: {
				type: String,
				default: 'button'
			},
            'native-type': {
				type: String,
				default: null
			},
			block: {
				type: Boolean,
				default: false
			},
			plain: {
				type: Boolean,
				default: false
			},
            square: {
				type: Boolean,
				default: false
			},
			round: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			hairline: {
				type: Boolean,
				default: false
			},
			loading: {
				type: String,
				default: null
			},
			'loading-size': {
				type: String,
				default: null
			},
			url: {
				type: String,
				default: null
			},
			to: {
				type: String,
				default: null
			},
			replace: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
			}
		},
		methods: {
			click(event) {
				this.$emit('click',event)
			},
			touchstart(event) {
				this.$emit('touchstart',event)
			},
		}
	}
</script>

<style lang="less">

</style>
