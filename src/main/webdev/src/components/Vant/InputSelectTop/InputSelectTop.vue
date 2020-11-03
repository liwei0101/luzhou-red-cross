<template>
  <div class="vant-custom-select-top">
    <van-popup class="vanPopup" :value="value"
			@click-overlay="onClose"
      position="top" :close-on-click-overlay="popupType">
      <div class="select-box">
        <ul>
          <li
            class="hairline-bottom"
            v-for="(item,index) in list"
            :key="index"
            @click="onChange(item)"
          >
            {{item[title]}}
            <div class="icondiv">
                <van-icon 
                :style="{float:iconStyle,paddingLeft:leftType}"
                :name="iconType" 
                :size="iconSize" 
                :color="iconColor" 
                v-if="item[val]===innerSelect[val]"/>
            </div>
            
          </li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>

import clone from 'clone'
export default {
  name: "vant-custom-select-top",
  props: {
    value: {
      type: Boolean,
      default () {
        return false
      }
    },
    val: {
       type: String,
			default: "val"
    },
    title:{
      type: String,
			default: "title"
    } ,
    list: {
      type: Array,
      default: []
		},
		popupType: {
			type: Boolean,
			default: true
		},
		iconType: {
			type: String,
			default: "success"
		},
		iconStyle: {
			type: String,
			default: ""
		},
		leftType: {
			type: String,
			default: ""
		},
		iconColor: {
			type: String,
			default: "inherit"
		},
		iconSize: {
			type: String,
			default: "20px"
		}
  },
  data() {
    return {
      innerSelect: "",
			wrapperHeight:0
    };
	},
  methods: {
    onChange(item) {
      this.innerSelect = item;
      this.$emit('on-change', item);
      this.onClose()
    },
		onClose () {
			this.$emit('input', false)
			this.$emit('on-close', false)
		}
  }
};
</script>
<style lang="less">
  .van-overlay{
      .vanPopup {
        top: 60px;
      }
      .van-overlay {
        top: 60px;
      }
  }

</style>
<style lang="less" scoped>
    .vant-custom-select-top{
        .hairline-bottom {
            position: relative;
            border: none;
        }

        .hairline-bottom::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            border-bottom: 1px solid #dddee3;
            width: 100%;
            -webkit-transform: scale(1, 0.5);
            transform: scale(1, 0.5);
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom;
            z-index: 1;
        }

        .title {
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            text-align: center;
            z-index: 3000;
            display: inline-block;
            padding: 0 10px;
            border: 1px solid #ccc;
        }

        .select-box {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            ul {
                width: 100%;
                background: #fff;
                padding-left: 10px;
                li {
                    padding: 10px 10px 10px 0;
                    font-family: PingFangSC-Medium;
                    font-size: 15px;
                    color: #000000;
                    .icondiv{
                      display: inline-block;
                      position: absolute;
                      right: 15px;
                    }
                }
            }
        }
    }

</style>