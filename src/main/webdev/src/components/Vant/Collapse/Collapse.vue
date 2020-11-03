<template>
	<div>
		<van-collapse @change='change' v-model="currentActiveName"  :accordion='accordion' :border='border'>
		  <van-collapse-item v-for="item in activeName" :title="item.title" :name="item.name">
			{{item.content}}
		  </van-collapse-item>
		  <!--<van-collapse-item title="有赞零售" name="2">-->
			<!--网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失-->
		  <!--</van-collapse-item>-->
		  <!--<van-collapse-item title="有赞美业" name="3">-->
			<!--线上拓客，随时预约，贴心顺手的开单收银-->
		  <!--</van-collapse-item>-->
		</van-collapse>
	</div>
</template>

<script>
	export default {
		name: "van-custom-collapse-model",
		props: {
			activeName:{
				type:Array | String | Number,
				default:[
                  {
                    title:'有赞微商城'  ,
                    name:1,
					content: '提供多样店铺模板，快速搭建网上商城'
                  },
                  {
                    title:'有赞零售'  ,
                    name:2,
                    content: '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失'
                  },
                  {
                    title:'有赞美业'  ,
                    name:3,
                    content: '线上拓客，随时预约，贴心顺手的开单收银'
                  }
                ]
			},
			accordion:{
				type:Boolean,
				default:true
			},
			border:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				currentActiveName:this.activeName
			}
		},
		methods: {
			change(activeNames){
				this.$emit('change',activeNames)
			}
		}
	}
</script>

<style lang="less">

</style>
