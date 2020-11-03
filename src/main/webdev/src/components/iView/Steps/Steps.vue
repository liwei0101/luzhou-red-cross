<template>
	<div style="padding:5px 10px;">
		<Steps :current="current" :direction='direction' :status='status' :size='size'>
			<Step :title="item.title" :status='item.status' :content="item.content" :icon="item.icon" v-for='item in stepList'></Step>
		</Steps>
	</div>
</template>

<script>
export default {
	name: 'iview-custom-steps',
	props: {
		current:{
			type:Number,
			default:0
		},
		status:{
			type:String,
			default:''
		},
		size:{
			type:String,
			default:''
		},
		direction:{
			type:String,
			default:''
		},
		stepList:{
			type:Array,
			default(){
				return [{
					status:'',
					title:'注册',
					content:'注册',
					icon:'ios-person'
				},{
					status:'error',
					title:'上传头像',
					content:'',
					icon:'ios-camera'
				},{
					status:'',
					title:'验证邮箱',
					content:'',
					icon:'ios-mail'
				}]
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
