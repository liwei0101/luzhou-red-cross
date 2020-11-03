<!--  page : 便民服务 -->
<template>
	<div>
		<div class="list-wrap">
			<div @click="clickItem(item)" :style="{flex:flexColumn }" class="list-item" v-for="(item,index) in listData" :key="index">
				<div><img :src="item.logo||'https://fdfsstorage.systoon.com/group2/M00/00/00/rBELzlv2RyGACavTAAAC9HJygQ0935.png'" /></div>
				<div>{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.list-wrap {
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	
	.list-wrap .list-item {
		flex: 0 0 25%;
		box-sizing: border-box;
		text-align: center;
	}


	
	.list-item>div:nth-child(1) {
		width: 44px;
		height: 44px;
		margin: 20px auto 4px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.list-item>div:nth-child(1)>img {
		width: 100%;
		height: 100%;
	}
	
	.list-item>div:nth-child(2) {
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #5C5C5C;
		text-align: center;
	}
</style>

<script>
	export default {
		name:'IconList',
		props: {
				listData: {
					type: Array,
					default() {
						return []
					}
				},
				column: {
					type: [Number , String ],
					default() {
						return 4
					}
				},
			},
		data() {
			return {
				
			}
		},
		computed:{
			flexColumn(){
				let _column = this.column
				_column = 100/parseInt( _column )
				return `0 0 ${_column}%`
			}
		},
		methods: {
			/*
			 * 点击图标
			 */
			clickItem(item) {
				this.$emit('clickItem',item)
			}

		},

	};
</script>