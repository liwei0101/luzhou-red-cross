<template>
	<div class="vant-custom-imagePre">
		<van-image-preview
			v-model="show"
			:images="images"
			:startPosition="startPosition"
			:showIndex="showIndex"
			:showIndicators="showIndicators"
			:loop="loop"
			:asyncClose="asyncClose"
			:className="className"
			:lazyLoad="lazyLoad"
			:maxZoom="maxZoom"
			:minZoom="minZoom"
			@change="onChange"
			@close="close"
			>
			<!-- <template v-slot:index>第{ index }页</template> -->
		</van-image-preview>
	</div>
</template>

<script>
	import { ImagePreview } from 'vant';
	export default {
		name: "vant-custom-image-preview",
		props: {
			showDig: {
				type: Boolean,
				default: true
			},
			images: {
				type: Array,
				default () {
					return [
					'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1556903420,275142630&fm=173&app=49&f=JPEG?w=218&h=146&s=95F453946F7C54070CF831DB030080B2',
					'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1369817269,2232515661&fm=173&app=49&f=JPEG?w=218&h=146&s=0A70178A0C84AF07D68521840300E023'
				  ]
				}
			},
			startPosition:{
				type:Number,
				default:0
			},
			showIndex:{
				type:Boolean,
				default:true
			},
			showIndicators:{
				type:Boolean,
				default:false
			},
			loop:{
				type:Boolean,
				default:true
			},
			asyncClose:{
				type:Boolean,
				default:false
			},
			className:{
				type:Object,
				default(){
					return {}
				}
			},
			lazyLoad:{
				type:Boolean,
				default:false
			},
			maxZoom: {
				type:Number,
				default:3
			},
			minZoom: {
				type:Number,
				default:1
			}
		},
		data() {
			return {
				show:false,
			}
		},
		watch: {
			showDig: {
				handler(val) {
				this.show = val;
				}
			}
		},
		methods:{
			onChange(index) {
				this.index = index;
				this.$emit('onChange',index)
			},
			close(data) {
				this.$emit("input", false);
				console.log(data)
				this.$emit('close',data)
			},
		}
	}
</script>

<style lang="less" scoped>
.vant-custom-imagePre{
	img{
		width: 100%;
		height: auto;
	}
}

</style>
