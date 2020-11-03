<template>
	<div style="padding: 10px 0;" :startValue='startValue'>
		<van-slider 
			v-model="value" 
			:disabled='disabled'
			:max='max' 
			:min='min' 
			:step='step'
			:bar-height='barHeight'
			:active-color='activeColor'
			:inactive-color='inactiveColor'
			:vertical='vertical'
			@change='change'/>
	</div>	
</template>

<script>
	export default {
		name: "vant-custom-slider",
		props: {
            disabled: {
				type: Boolean,
				default: false
			},
			max: {
				type: Number,
				default: 100
			},
			min: {
				type: Number,
				default: 0
			},
			step: {
				type: Number,
				default: 1
			},
			'bar-height': {
				type: String,
				default: '2px'
			},
			'active-color': {
				type: String,
				default: '#1989fa'
			},
			'inactive-color': {
				type: String,
				default: '#e5e5e5'
			},
			vertical: {
				type: Boolean,
				default: false
			},
			startValue: {
				type: Number,
				default: 0
			},
		},
		watch:{
			startValue(){
				this.value = this.startValue
			}
		},
		data() {
			return {
				value:0
			}
		},
		methods: {
			change(data){
                this.$emit('change',data)
                this.$emit('input',data)
			}
		},
		mounted(){
			this.value = this.startValue
		}
	}
</script>

<style lang="less">

</style>
