<template>
  <div class="vant-custom-select-right">
		<van-popup :value="value" 
			position="right"
			:close-on-click-overlay="closeLay"
			style="width: 80%;height: 100%;"
			@click-overlay="onClose"
			>
			<div class="container" v-for="(itemL,indexL) in list" :key="indexL">
				<div class="title">
					<span 
						:style="'border-color:'+ back"
					>
						{{itemL[selectValue]}}
					</span>
				</div>
				<ul>
					<li 
						v-for="(item,index) in itemL[selectSub]"
						:class="{'activeSele': isSelected(item,itemL[selectId])}"
						:style="isSelected(item,itemL[selectId]) ? 'border-color:'+ back +'!important;background:'+back : ''"
						:key="index" 
						@click="clickItem(item,itemL[selectId])">
						{{item[selectValue]}}
					</li>
				</ul>
			</div>
			<div class="buttonGroup">
				<van-button v-show="showReset" :style="'border-color:'+back" @click="reset">{{resetText}}</van-button>
				<van-button v-show="showConfirm" :style="'color:#fff;background:'+back" @click="onOk">{{confirmText}}</van-button>
			</div>
		</van-popup>
	</div>
</template>

<script>
import clone from 'clone'
export default {
	name: "vant-custom-select-right",
	props: {
		value: {
			type: Boolean,
			default () {
				return false
			}
		},
		selectValue:{
			type: String,
			default: 'name'
		},
		selectKey:{
			type: String,
			default: 'id'
		},
		dataIndex:{
			type: String,
			default: 'id'
		},
		selectData: {
			type: Array,
			default: []
			},
		list: {
			type: Array,
			default: []
		},
		closeLay: {
			type: Boolean,
			default: true
		},
		back: {
			type: String,
			default: '#DF3031'
		},
		resetText: {
			type: String,
			default: '重置'
		},
		confirmText: {
			type: String,
			default: '确认'
		},
		showReset: {
			type: Boolean,
			default: true
		},
		showConfirm: {
			type: Boolean,
			default: true
		},
		selectValue:{
			type: String,
			default: 'label'
		},
		selectKey:{
			type: String,
			default: 'value'
		},
		selectId:{
			type: String,
			default: 'id'
		},
		selectSub:{
			type: String,
			default: 'children'
		},
	},
	data () {
		return {
			innerSelect: clone(this.selectData) || []
		}
	},
	watch: {
		selectData () {
			this.innerSelect = clone(this.selectData)
        }
	},
	methods: {
		isSelected (item,id) {
		    let t = false;
		    this.innerSelect.forEach((value)=>{
		        if(value[this.selectKey]==item[this.selectKey]&&value[this.selectId]==id){
		            t = true;
				}
			});
            return t
        },
		clickItem (item,id) {
		    item[this.selectId] = id;
		    let i = -1;
            this.innerSelect.forEach((value,index)=>{
                if(value[this.selectId]==id){
                    i = index;
                }
            });
            if (i > -1) this.innerSelect[i] = item;
            this.$forceUpdate();
		},
		// 重置
		reset () {
			this.innerSelect = clone(this.selectData);
			this.$forceUpdate();
			this.$emit('on-reset');
		},
		// 确认
		onOk () {
			this.$emit('on-ok', clone(this.innerSelect));
			this.onClose()
		},
		onClose () {
			this.$emit('input', false)
			this.$emit('on-close', false)
		}
	}
};
</script>

<style lang="less" scoped>
	.vant-custom-select-right{
		.toptitle {
			height: 40px;
			line-height: 40px;
			cursor: pointer;
			text-align: center;
			z-index: 3000;
			display: inline-block;
			padding: 0 10px;
			border: 1px solid #ccc;
		}
		.container {
			font-family: PingFangSC-Regular;
			width: 100%;

			.title {
				line-height: 44px;
				font-family: PingFangSC-Medium;
				font-size: 15px;
				color: #000000;
				padding-left: 14px;
				span{
					border-left: 4px solid #DF3031;
					line-height: 13px;
					display: inline-block;
					padding-left: 5px;
				}
			}
			.activeSele{
				background: #DF3031;
				border: 0.5px solid #DF3031 !important;
				color: #FFFFFF;
			}
			ul {
				margin-left: 14px;
				li {
					display: inline-block;
					padding: 5px 10px;
					border: 0.5px solid #DDDEE3;;
					margin:0 14px 14px 0px;
					border-radius: 2px;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #000000;
					cursor: pointer;
				}
			}
		}
		.buttonGroup {
			position: fixed;
			width: 100%;
			bottom:10px;
			text-align: center;
			button {
				width: 44%;
				border-radius: 4px;
				font-size: 17px;
				font-family: PingFangSC-Regular;
				&:first-child {
					margin-right: 15px;
				}
				&:last-child {
				}
			}
		}
		.unselected {
			color: #000;
			border: 0.5px solid #000;
			background: #fff;
		}
		.selected {
			color: #fff !important;
			border: 0.5px solid #DF3031 !important;
			background: #DF3031;
		}
	}

</style>