<template>
    <div @click="click" class="customer-news">
        <div class="news-container">
			<div :class="showLine?'news-content hairline-bottom':'news-content'">
                <img v-if="showLeftImg && imgSrc" class="news-left-img" :src="imgSrc"/>
				<div class="news-text">
					<div class="news-text-title">
						<slot></slot>
                        <span class="news-title">
                            {{title}}
                        </span>
					</div>
					<div v-show="labelLeft || labelRight" class="news-second">
						<span v-show="labelLeft" class="news-left">
                            <slot name="label"></slot>{{labelLeft}}
						</span>
						<span v-show="labelRight" class="news-right">
                            {{labelRight}}
						</span>
					</div>
				</div>
				<img v-if="showRightImg && imgSrc" class="news-right-img" :src="imgSrc"/>
			</div>
		</div>
    </div> 
</template>

<script>
export default {
    name: "customer-news",
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
            default: '千龙网·环境'
        },
        labelRight: {
            type: String,
            default: '3小时前'
        },
        showLine: {
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
    methods:{
        click(){
            this.$emit('click');
        }
    }
       
}
</script>

<style lang="less">
    .hairline-bottom{position: relative;border:none;}
    .hairline-bottom::after{content: '';position: absolute;left: 0;bottom: 0;border-bottom: 1px solid #E1E1E1;width: 100%;-webkit-transform: scale(1,.5);transform: scale(1,.5);-webkit-transform-origin: center bottom;transform-origin: center bottom;z-index: 1;}

    .customer-news{
        .news-container { 
            padding:12px 16px 0 16px; 
            .news-content { 
                display:inline-flex;
                display:-webkit-inline-flex;
                padding-bottom:13px;
                position: relative;  
                .news-text { 
                    width:100%;
                    padding:0px 0px 0px 0px;  
                    .news-text-title { 
                        text-overflow:-o-ellipsis-lastline;
                        text-overflow:ellipsis;
                        overflow:hidden;
                        display:-webkit-box;
                        -webkit-line-clamp:2;
                        -webkit-box-orient:vertical;
                        .news-title { 
                            font-family:PingFangSC-Regular;
                            font-size:18px;
                            color:#222222;
                            letter-spacing:0.5px; 
                        } 
                    }
                
                    .news-second { 
                        display:flex;
                        display:-webkit-flex;
                        font-family:PingFangSC-Light;
                        font-size:12px;
                        color:#8E8E93;
                        padding:8px 0px 0px 0px;
                        .news-left { 
                            flex:1; 
                        }
                        .news-right { 
                            flex:1;
                            text-align:right; 
                        } 
                    }
                }
                .news-left-img { 
                    margin-top: 2px;
                    max-width:100%;
                    width:111px;
                    height:75px; 
                    margin-right: 14px;
                }
                .news-right-img { 
                    margin-top: 2px;
                    max-width:100%;
                    width:111px;
                    height:75px; 
                    margin-left: 14px;
                }
            }
        }
        


        
       
        
    }
</style>


