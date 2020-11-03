<template>
    <div @click="onclick" :class="[showLine?'hairline-bottom':'','vant-custom-search']" :style="'padding: 10px 16px;'">
        <form action="javascript:return false;">
            <div class="search" :style="'border-radius:'+(round?'15':'5')+'px;'">
                <div :style="''" class="searchBox" :class="centerText?'centerSearchBox':''">
                    <div class="centerSearchText" v-show="centerText">
                        <i class="searchIcon"></i> <span v-show="centerText">{{centerText?placeholder:''}}</span>
                    </div>
                    <i class="searchIcon" v-show="!centerText"></i>
                    <input :style="'border-radius:'+(round?'15':'5')+'px;background: '+inputBg+';'" :maxlength="maxlength" ref="searchInput"
                           class="searchInput" type="search" v-model.trim="name" :autofocus="autofocus" :disabled="disabled"
                           :placeholder="centerText?'':placeholder" @input="input" @keyup.enter="search"/>
                    <!--清除-->
                    <span class="closeBtn" v-if="showCloseBtn" @click="clearText"></span>
                </div>
                <span v-show="cancel" class="searchT" @click="cancelClick">{{cancelText}}</span>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "vant-custom-search",
        props: {
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: '请输入搜索关键词'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            round: {
                type: Boolean,
                default: false
            },
            centerText: {
                type: Boolean,
                default: false
            },
            disabled:{
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            focusInput: {
                type: Boolean,
                default: false
            },
            cancel: {
                type: Boolean,
                default: false
            },
            maxlength: {
                type: Number
			},
			showLine: {
                type: Boolean,
                default: true
			},
			inputBg:{
				type: String,
				default: '#F3F5F9'
			}
        },
        data() {
            return {
                name:'',
                showCloseBtn: false, //是否显示关闭
            }
        },
        watch: {
            name() {
                if (this.name.length) {
                    this.showCloseBtn = true
                } else {
                    this.showCloseBtn = false
                }
            },
            centerText(val) {
                if(val){
                    this.name = '';
                }
            },
        },
        mounted() {
            if (this.focusInput) {
                setTimeout(() => {
                    this.$refs.searchInput.focus();
                }, 10);
            }
        },
        methods: {

            //搜索
            search() {
                this.$refs.searchInput.blur();
                setTimeout(() => {
                    this.$emit('input', this.name)
                    this.$emit('search', this.name)
                }, 10);

            },//搜索
            input() {
                setTimeout(() => {
                    this.$emit('input', this.name)
                }, 10);
            },
            onclick() {
                setTimeout(() => {
                    this.$emit('onclick', this.name)
                }, 10);
            },
            cancelClick() {
                this.$refs.searchInput.blur();
                setTimeout(() => {
                    this.$emit('cancel', this.name)
                }, 10);

            },
            //清除数据
            clearText() {
                this.name = "";
                setTimeout(() => {
                    this.$emit('input', this.name)
                    this.$emit('clear', this.name)
                }, 10);
            },

        }
    };

</script>
<style lang="less">
.hairline-bottom{position: relative;border:none;}
.hairline-bottom::after{content: '';position: absolute;left: 0;bottom: 0;border-bottom: 1px solid #E1E1E1;width: 100%;-webkit-transform: scale(1,.5);transform: scale(1,.5);-webkit-transform-origin: center bottom;transform-origin: center bottom;z-index: 1;}

    .vant-custom-search {
        .search {
            width: 100%;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            .searchBox {
                position: relative;
                -webkit-flex: 1;
                -moz-flex: 1;
                -ms-flex: 1;
                -o-flex: 1;
                -khtml-flex: 1;
                flex: 1;
                .searchIcon {
                    border-radius: 5px;
                    background: url("./search.png") no-repeat;
                    background-size: 16px 16px;
                    display: inline-block;
                    height: 16px;
                    width: 16px;
                    position: absolute;
                    top: 8px;
                    left: 8px;
                }
                .searchInput {
                    display: inline-block;
                    border: none;
                    background: #F3F5F999;
                    height: 32px;
                    width: 100%;
                    border-radius: 5px;
                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #222222;
                    letter-spacing: 0;
                    // line-height: 16px;
                    padding-left: 29px;
                    padding-right: 10px;
                    &:disabled{
                        background: #f7f8fA55;
                    }
                    &::-webkit-input-placeholder {
                        font-family: PingFangSC-Regular;
                        font-size: 16px;
                        color: #8E8E93;
                    }
                }
                .closeBtn {
                    width: 14px;
                    height: 14px;
                    display: inline-block;
                    background: url("./close.png") no-repeat;
                    background-size: 14px 14px;
                    position: absolute;
                    right: 6px;
                    top: 9px;
                }
                &.centerSearchBox{
                    text-align: center;
                    .centerSearchText{
                        text-align: center;
                        position: absolute;
                        left: 0;
                        right: 0;
                        padding-top: 2px;
                        .searchIcon{
                            position: relative;
                            height: 20px;
                            top: 6px;
                            left: 0px;
                        }
                        span{
                            font-family: PingFangSC-Regular;
                            font-size: 16px;
                            color: #8E8E93;
                            letter-spacing: 0
                        }
                    }
                }
            }
            .searchT {
                line-height: 32px;
                cursor: pointer;
                margin-left: 10px;
                font-family: PingFangSC-Regular;
                font-size: 17px;
                color: #222222;
            }
        }
        .searchSpan {
            display: inline-block;
            width: 100%;
            height: 32px;
            border-radius: 5px;
            background: #FFFFFF;
        }

        .placehold {
            display: inline-block;
            background: #f7f8fA55 url("./search.png") no-repeat 3px 3px;
            background-size: 16px 16px;
            text-indent: 22px;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #8E8E93;
            letter-spacing: 0;
            position: absolute;
            top: 12px;
            left: 50px;
        }

    }

</style>

