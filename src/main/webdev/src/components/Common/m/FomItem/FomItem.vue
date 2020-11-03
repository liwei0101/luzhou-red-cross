<template>
    <div class="customer-form-item">
        <div class="news-container">
			<div class="news-content">
                <img :style="'border-radius:'+(round?'50%':'0px')+';'" v-if="showLeftImg && imgSrc" class="news-left-img" :src="imgSrc"/>
				<div :class="showLine?'text-form-area hairline-bottom':'text-form-area'">
                    <div class="news-text">
                        <div class="news-text-title" :style="labelLeft?'-webkit-line-clamp:1;':'-webkit-line-clamp:2;'+singleTitle?'-webkit-line-clamp:1!important;':'-webkit-line-clamp:1!important;'">
                            <slot></slot>
                            <span :style="iconType?'font-size:18px;':'font-size:16px;'" class="news-title">
                                {{title}}
                            </span>
                        </div>
                        <div :style="iconType?'font-size:15px;':'font-size:14px;'"   v-show="labelLeft" class="news-second">
                            <span v-show="labelLeft" class="news-left">
                                <slot name="label"></slot>{{labelLeft}}
                            </span>
                        </div>
                    </div>
                    <img :style="'border-radius:'+(round?'50%':'0px')+';'" v-if="showRightImg && imgSrc" class="news-right-img" :src="imgSrc"/>
                    <div v-if="iconType" :style="singleTitle?'line-height:50px':'line-height:26px;'">
                        <Icon style="font-size: 20px;color: rgb(193,193,193);" :type="iconType" />
                    </div>
                </div>

			</div>
		</div>
    </div> 
</template>

<script>
    export default {
        name: "customer-form-item",
        props: {
            title: {
                type: String,
                default: '福建开展明码标价专项检查 不按规定的内容1111和方式明码标价等'
            },
            imgSrc: {
                type: String,
                default: ''
            },
            labelLeft: {
                type: String,
                default: ''
            },
            iconType:{
                type: String,
                default: ''
            },
            singleTitle: {
                type: [Boolean,String],
                default: true
            },
            showLine: {
                type: [Boolean,String],
                default: true
            },
            round: {
                type: [Boolean,String],
                default: true
            },
            showLeftImg: {
                type: [Boolean,String],
                default: true
            },
            showRightImg: {
                type: [Boolean,String],
                default: false
            },
        },
        data() {
            return {
                showCloseBtn: false, //是否显示关闭
            }
        },
    }
</script>

<style lang="less">
/*0.5边线*/
.hairline-top{position: relative;border:none;}
.hairline-top::before{content: '';position: absolute;left: 0;top: 0;background: #DDDEE3;width: 100%;height: 1px;-webkit-transform: scale(1,.5);transform: scale(1,.5);-webkit-transform-origin: center top;transform-origin: center top;}
.hairline-bottom{position: relative;border:none;}
.hairline-bottom::after{content: '';position: absolute;left: 0;bottom: 0;border-bottom: 1px solid #DDDEE3;width: 100%;-webkit-transform: scale(1,.5);transform: scale(1,.5);-webkit-transform-origin: center bottom;transform-origin: center bottom;z-index: 1;}
.hairline-left{position: relative;border:none;}
.hairline-left::before{content: '';position: absolute;top: 0;left: 0;border-right: 1px solid #DDDEE3;height:200%;-webkit-box-sizing: border-box;box-sizing: border-box;-webkit-transform: scale(0.5);transform: scale(0.5);-webkit-transform-origin: left top;transform-origin: left top;z-index: 1}
.hairline-right{position: relative;border:none;}
.hairline-right::after{content: '';position: absolute;top: 0;right: 0;border-left: 1px solid #DDDEE3;height:200%;-webkit-box-sizing: border-box;box-sizing: border-box;-webkit-transform: scale(0.5);transform: scale(0.5);-webkit-transform-origin: right top;transform-origin: right top;z-index: 1}
.hairline{position: relative;border:none;}
.hairline::after{content: '';position: absolute;top: 0;left: 0;border: 1px solid #DDDEE3;-webkit-box-sizing: border-box;box-sizing: border-box;width: 200%;height: 200%;-webkit-transform: scale(0.5);transform: scale(0.5);-webkit-transform-origin: left top;transform-origin: left top;}
.hairline-tb{position: relative;border:none;}
.hairline-tb:before{content: '';position: absolute;top: -50%;bottom: -50%;left: -50%;right: -50%;-webkit-transform: scale(0.5);transform: scale(0.5);border-top: 1px solid #dddee3;border-bottom: 1px solid #dddee3;}

    .customer-form-item{
        .news-container { 
            .news-content {
                width:100%;
                padding:12px 0px 0px 16px; 
                display:inline-flex;
                display:-webkit-inline-flex; 
                .text-form-area{
                    display:inline-flex;
                    display:-webkit-inline-flex; 
                    flex:1;
                    padding:0px 6px 12px 0px;
                }
                .news-text { 
                    width:100%;
                    padding:0px 0px 0px 0px;  
                    .news-text-title { 
                        text-overflow:-o-ellipsis-lastline;
                        text-overflow:ellipsis;
                        overflow:hidden;
                        display:-webkit-box;
                        -webkit-line-clamp:1;
                        -webkit-box-orient:vertical;
                        .news-title { 
                            font-family:PingFangSC-Regular;
                            color:#222222;
                            letter-spacing:0.5px; 
                        } 
                    }
                
                    .news-second { 
                        font-family:PingFangSC-Light;
                        color:#8E8E93;
                        padding:4px 0px 0px 0px;
                        text-overflow:-o-ellipsis-lastline;
                        text-overflow:ellipsis;
                        overflow:hidden;
                        display:-webkit-box;
                        -webkit-line-clamp:1;
                        -webkit-box-orient:vertical;
                    }
                }
                .news-left-img { 
                    margin-top: 2px;
                    max-width:100%;
                    width:50px;
                    height:50px; 
                    margin-right: 14px;
                }
                .news-right-img { 
                    margin-top: 2px;
                    max-width:100%;
                    width:50px;
                    height:50px; 
                    margin-left: 14px;
                    margin-right: 6px;
                }
            
            
            }
            .news-line-botom { 
                width:100%;
                height:1px;
                box-shadow:inset 0 .5px 0 0 #DDDEE3;
            }
        }
        
    }
</style>


