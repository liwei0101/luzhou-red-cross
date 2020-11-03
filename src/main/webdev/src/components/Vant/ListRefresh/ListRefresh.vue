<template>
    <div class="parent-list" >
        <div class="sub-list"  >
             <van-pull-refresh
                v-model="isLoading"
                :pulling-text="pullingText"
                :loosing-text="loosingText"
                :success-text="successText"
                @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    :finished-text="finishedText"
                    :error-text="errorText"
                    :immediate-check='autoLoad'
                    @load="onLoad" >
                       <slot>

                       </slot>
                       <slot slot="loading" name="loading">
                         <van-loading size="24px">加载中...</van-loading>
                       </slot>
                </van-list>
            </van-pull-refresh>
        </div>

    </div>
</template>

<script>
import {postRequest,getRequest} from '@/libs/http/$http.js'
import { Toast } from 'vant';

export default {
    name: "vant-custom-list-refresh",
    props: {
        value:{
            type: [ Boolean,String],
            default(){
                return null
            }
        },
        url: {
            type: String,
            default: ''
        },
        param: {
            type: Object,
            default: {}
        },
        pageNoKey: {
            type: String,
            default: 'pageNo'
        },
        pageSizeKey: {
            type: String,
            default: 'pageSize'
        },
        records: {
            type: String,
            default: null
        },
        pageSize: {
            type: Number,
            default: 10
        },
        isGetMethod: {
            type: Boolean,
            default: false
        },
        isString: {
            type: Boolean,
            default: false
        },
        pullingText: {
            type: String,
            default: '下拉刷新'
        },
        loosingText: {
            type: String,
            default: '加载中'
        },
        successText: {
            type: String,
            default: ''
        },
        finishedText: {
            type: String,
            default: '—— •我是有底线的• ——'
        },
        errorText: {
            type: String,
            default: '请求失败，点击重新加载'
        },
        autoLoad: {
            type: Boolean,
            default: false
        },

    },
    data() {
        return {
            isLoading: false,
            loading: false,
            listData:[],
            error:false,
            finished:false,
            pageNum:1
        }
    },
    mounted () {
    },
    methods: {
        init (top){
            
            let param_={};
            let param1= this.pageNoKey;
            let param2= this.pageSizeKey;
            param_[param1]= this.pageNum;
            param_[param2]= this.pageSize;

            let method_ = {};
            if(this.isGetMethod){
                method_ = getRequest;
            }else{
                method_ = postRequest;
            }
            method_(this.url,
            Object.assign(this.param,param_))
            .then(resa => {
                let res = resa.data;
                if(this.isString){
                    res =JSON.parse(resa.data);
                }

                let records = this.records;
                let listdata = records && res ?  res[records] : res

                if( listdata ){
                    if (top) {
                        this.finished = false;
                        this.listData = [];
                        this.listData = listdata;
                    } else {
                        this.listData = this.listData.concat( listdata );
                    }
                    if (listdata.length < this.pageSize) {
                        this.finished = true;
                        this.$emit('onLoad',this.finished);
                    }
                    this.loadData = true;
                    this.isLoading = false;
                    this.loading = false;
                    this.pageNum++;
                    this.$emit('getData',this.listData);
                }else{
                    this.finished = true;
                    this.loadData = true;
                    this.isLoading = false;
                    this.loading = false;
                }

            })
            .catch(err => {
                if (navigator.onLine) {
                Toast("服务器异常，请稍后重试");
                } else {
                Toast("网络异常，请稍后重试");
                }
            });
        },
        onRefresh() {
            this.pageNum = 1;
            this.listData = [];
            this.init(true);
        },
        onLoad() {
            this.init(false);
        },
    }
}
</script>
