<template>
	<div>
		<div class="pack-nav" :style="position" :class="[iconNum==2?'two':'one',showActionFlag?showActionFlag:'',vertical?'vertical':'']">
			<div class="nav-icon" :style="{backgroundColor:navIconColor}" @click="showAction">
				<i class="add-icon" :class="{hasText:unfoldText}">
					<van-icon :name="iconAdd" :color='addIconColor' :size='addIconSize' />
				</i>
				<p class="add-title" v-if="unfoldText">{{unfoldText}}</p>
			</div>
			<div class="nav-action">
				<div class="action-item" @click="firstIconClick">
					<div class="icon-publish">
						<van-icon :name="firstIcon" :color='iconColor' :size='iconSize' />
					</div>
					<div class="action-text">
						<div class="icon-title">{{firstIconText}}</div>
					</div>
				</div>
				<div class="action-item action-mypub" v-if="iconNum==2" @click="secondIconClick">
					<div class="icon-publish second-icon">
						<van-icon :name="secondIcon" :color='iconColor' :size='iconSize' />
					</div>
					<div class="action-text-mypub">
						<div class="icon-title">{{secondIconText}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<!--使用scss模式，组件须定义scoped 作用域-->
<style lang="less" scoped="scoped">
	@keyframes scope0 {
		0% {
			width: 64px;
		}

		100% {
			width: 192px;
		}
	}

	@-webkit-keyframes scope0

	/* Safari 和 Chrome */
		{
		0% {
			width: 64px;
		}

		100% {
			width: 192px;
		}
	}

	@keyframes scope1 {
		0% {
			width: 192px;
		}

		100% {
			width: 64px;
		}
	}

	@-webkit-keyframes scope1

	/* Safari 和 Chrome */
		{
		0% {
			width: 192px;
		}

		100% {
			width: 64px;
		}
	}

	@keyframes scope2 {
		0% {
			width: 64px;
		}

		100% {
			width: 128px;
		}
	}

	@-webkit-keyframes scope2

	/* Safari 和 Chrome */
		{
		0% {
			width: 64px;
		}

		100% {
			width: 128px;
		}
	}

	@keyframes scope3 {
		0% {
			width: 128px;
		}

		100% {
			width: 64px;
		}
	}

	@-webkit-keyframes scope3

	/* Safari 和 Chrome */
		{
		0% {
			width: 128px;
		}

		100% {
			width: 64px;
		}
	}

	.pack-nav.active.two .nav-action {
		animation: scope0 .3s forwards;
		-webkit-animation: scope0 .3s forwards;
		/* Safari 和 Chrome */
	}

	.vertical .nav-action {
		transform-origin: 100% 100%;
		-webkit-transform-origin: 100% 100%;
		transform: rotate(90deg) translate(0, 100%);
		-webkit-transform: rotate(90deg) translate(0, 100%);
	}

	.pack-nav.unactive.two .nav-action {
		animation: scope1 .25s ease-out forwards;
		-webkit-animation: scope1 .25s ease-out forwards;
		/* Safari 和 Chrome */
	}

	.pack-nav.active.one .nav-action {
		animation: scope2 .3s forwards;
		-webkit-animation: scope2 .3s forwards;
		/* Safari 和 Chrome */
	}

	.pack-nav.unactive.one .nav-action {
		animation: scope3 .25s ease-out forwards;
		-webkit-animation: scope3 .25s ease-out forwards;
		/* Safari 和 Chrome */
	}

	.pack-nav {
		position: absolute;
		height: 65px;
	}

	.nav-icon {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 100;
		width: 64px;
		height: 64px;
		border-radius: 32px;
		//box-shadow: 0 1px 4px 0 rgba(223, 48, 49, 0.50);
	}

	.nav-action {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 99;
		width: 64px;
		height: 64px;
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: 32px;
		overflow: hidden;
		-webkit-transition: all .1s;
		transition: all .3s;
		/*     -moz-transition: all 1s;
	       -ms-transition: all 1s;
	       -o-transition: all 1s;    */

	}

	// 		.vertical.active  .nav-action{
	// 			right: -64px;
	// 			top: -64px;
	// 		}
	.paginationcurrent {
		width: 8px;
		height: 8px;
		display: inline-block;
		border-radius: 100%;
		background: #000;
		opacity: .5;
	}

	.action-item {
		padding-left: 34px;
		position: absolute;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 64px;
		text-align: center;
	}

	.vertical .action-item {
		padding-left: 20px;
		transform: rotate(-90deg);
		-webkit-transform: rotate(-90deg);
	}

	.vertical .action-text {
		left: 17px;
	}

	.action-mypub.action-item {
		padding-left: 20px;
	}

	.action-mypub {
		left: 64px;
	}

	.add-icon,
		{
		display: inline-block;
		width: 20px;
		height: 20px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 22px;
		left: 22px;
	}

	.add-icon.hasText {
		top: 11px;
	}

	.add-title {
		position: absolute;
		bottom: 8px;
		left: 18px;
		font-size: 13px;
		color: #fff;
	}

	.icon-publish {
		width: 23px;
		height: 20px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		float: left;
		position: relative;
		top: 13px;
		text-align: center;
	}

	.icon-my-pub {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-left: -15px;
		width: 20px;
		height: 17px;
		top: 15px;
	}

	.comment-dot {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #FF3B30;
		right: -4px;
		top: -4px;
	}

	.action-text {
		top: 38px;
		left: 30px;
		position: absolute;
	}

	.action-text-mypub {
		top: 38px;
		left: 17px;
		position: absolute;
	}

	.icon-title {
		font-size: 13px;
		color: #fff;
		letter-spacing: 0;
	}
</style>

<script>
	export default {
		name: "suspension-btn",
		props: {
			position: {
				type: Object,
				default () {
					return {
						bottom: '65px',
						right: '35px',
						'z-index': 101
					}
				}
			},
			vertical: {
				type: Boolean,
				default: false
			},
			iconAdd: {
				type: String,
				default: 'van-icon van-icon-plus'
			},
			addIconColor: {
				type: String,
				default: '#fff'
			},
			addIconSize: {
				type: String,
				default: '24px'
			},
			iconNum: {
				type: String,
				default: '2'
			},
			unfoldText: {
				type: String,
				default: '发布'
			},
			navIconColor: {
				type: String,
				default: '#DF3031'
			},
			firstIconText: {
				type: String,
				default: '发布'
			},
			firstIcon: {
				type: String,
				default: 'van-icon van-icon-photograph'
			},
			secondIconText: {
				type: String,
				default: '我的'
			},
			secondIcon: {
				type: String,
				default: 'van-icon van-icon-photo'
			},
			iconColor: {
				type: String,
				default: '#fff'
			},
			iconSize: {
				type: String,
				default: '20px'
			},
		},
		data() {
			return {
				//是否显示操作按钮
				showActionFlag: false,

			};
		},
		methods: {
			/**
			 * 显示操作按钮
			 */
			showAction() {
				if (this.showActionFlag == "active") {
					this.showActionFlag = "unactive"
				} else {
					this.showActionFlag = "active"
				}
			},
			firstIconClick() {
				this.$emit('firstIconClick')
			},
			secondIconClick() {
				this.$emit('secondIconClick')
			}
		},
		mounted() {

		},
		//组件
		components: {}
	};
</script>
