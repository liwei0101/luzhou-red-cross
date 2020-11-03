<template>
	<div style="padding: 10px 0;">
		<van-progress
		  :pivot-text="pivotText"
		  :color="color"
		  :text-color='textColor'
		  :percentage="percentage"
		  :inactive='inactive'
		  :show-pivot='showPivot'
		  :pivot-color='pivotColor'
		/>
	</div>
</template>

<script>
	export default {
		name: "van-progress-model",
		props: {
			inactive:{
				type:Boolean,
				default:false 
			},
			percentage:{
				type:Number,
				default:0
			},
			'show-pivot':{
				type:Boolean,
				default:true
			},
			color:{
				type:String,
				default:'#1989fa'
			},
			'text-color':{
				type:String,
				default:'#fff'	
			},
			'pivot-text':{
				type:String,
				default:'描述'	
			},
			'pivot-color':{
				type:String,
				default:'#fff'	
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">

</style>
