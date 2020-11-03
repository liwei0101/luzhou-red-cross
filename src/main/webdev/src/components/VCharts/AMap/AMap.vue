<template>
	<div >
		<ve-amap :series='series'
				 :settings='settings'
				 :after-set-option-once="afterSet"
				 @ready="ready"
				 @ready-once="readyOnce"
				:height='height'
		></ve-amap>
	</div>
</template>

<script>
	export default {
		name:"ve-custom-amap",
		props:{
			value: {
				type: [Object,Boolean],
				default(){
					return {}
				}
			},
			series: {
				type: Array,
				default(){
					return []
				}
			},
			settings: {
				type: Object,
				default(){
					return {}
				}
			},
			height:{
				type:String,
				default:'400px'
			}	
		},
		data(){
			return {
			}
		},
		methods:{
			afterSet(echarts) {
				var amap =echarts.getModel().getComponent('amap').getAMap()
				this.$emit("afterSet" , amap  )
			},
			ready(TouchEvent){
				this.$emit("ready" , TouchEvent  )
			},
			readyOnce(echarts){
				var amap =echarts.getModel().getComponent('amap').getAMap()
				this.$emit("ready-once" , amap  )
			}
		}
	}
</script>

<style lang="less">

</style>
