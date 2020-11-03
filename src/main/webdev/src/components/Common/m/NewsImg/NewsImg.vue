<template>
    <div @click="click" class="customer-news-imgs">
        <div class="news-container">
			<div :class="showLine?'news-content hairline-bottom':'news-content'">
				<div class="news-text">
					<div class="news-text-title">
						<slot></slot>
                        <span class="news-title">
                            {{title}}
                        </span>
					</div>
                    <div v-show="imgSrc||imgSrc1||imgSrc2">
                        <div v-show="imgSrc" class="imgCont">
                            <img v-show="imgSrc" class="news-right-img" :src="imgSrc"/>
                        </div>
                        <div v-show="imgSrc1" class="imgCont">
                            <img v-show="imgSrc1" class="news-right-img" :src="imgSrc1"/>
                        </div>
                        <div v-show="imgSrc2" class="imgCont">
                            <img class="news-right-img" :src="imgSrc2"/>
                        </div>
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
			</div>
		</div>
    </div> 
</template>

<script>
export default {
    
    name: "customer-news-imgs",
    props: {
        title: {
            type: String,
            default: '福建开展明码标价专项检查 不按规定的内容1111和方式明码标价等'
        },
        imgSrc: {
            type: String,
            default: ''
        },
        imgSrc1: {
            type: String,
            default: ''
        },
        imgSrc2: {
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
        showLeftImg: {
            type: [Boolean,String],
            default: true
        },
        showLine: {
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
    .customer-news-imgs{
        .news-container { 
            padding:12px 16px 0 16px; 
            .news-content { 
                position: relative;
                display:inline-flex;
                display:-webkit-inline-flex; 
                padding-bottom:13px;  
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
                .imgCont{
                    display: inline-block;
                    width: 111px;
                    height:75px; 
                    padding-top: 8px; 
                    margin-right: 5px;
                    .news-right-img { 
                        max-width:100%;
                        width: 111px;
                        height:75px; 
                    }
                    &:last-child{
                        margin-right: 0px;
                    }
                }
                
            }
        }        
    }
</style>


