<template>
    <div class="vant-custom-uploader">
        <div class="upimg" v-for="(item,index) in imgUrl" v-if="imgUrl" :style="{width: widthsize+'px',height: heightsize+'px'}">
            <template v-if="item.status === 1">
                <img :style="{width: widthsize+'px',height: heightsize+'px'}" :src = item.url alt="">
                <van-icon v-show="deleteicon" class="up-del" :style="{fontSize:defontSize+'px'}" @click="delimg(index)" :name=closeicon />
            </template>
            <template v-else>
                <van-loading v-if="item.status === 0"/>
            </template>
        </div>
        <van-uploader :style="{width: widthsize+'px',height: heightsize+'px'}" v-if="imgUrl.length < imglength" :after-read="onafter" :before-read="onbefore" :accept="accept" :result-type="resultType" :disabled="disabled" :max-size="maxSize" @oversize="onOverSize">
            <van-icon :style="{fontSize:fontSize+'px'}" :name=addicon />
        </van-uploader>
    </div>
</template>

<script>
  import {postRequest } from '@/libs/axios.js'
  export default {
    name: "vant-custom-uploader",
    data() {
      return {
        imgUrl: [],
        imgIng: {}
      }
    },
    props: {
      accept: {
        type: String,
        default: 'image/jpeg, image/png'
      },
      resultType: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxSize: {
        type: Number,
        default: 1000000
      },
      widthsize: {
        type: Number,
        default: 100
      },
      heightsize: {
        type: Number,
        default: 100
      },
      fontSize: {
        type: Number,
        default: 30
      },
      defontSize: {
        type: Number,
        default: 22
      },
      imglength: {
        type: Number,
        default: 3
      },
      addicon: {
        type: String,
        default: "photograph"
      },
      deleteicon: {
        type: Boolean,
        default: true
      },
      closeicon: {
        type: String,
        default: "clear"
      },
      fileName: {
        type: String,
        default: "file"
      },
      url: {
        type: String,
        default: "file/upload"
      }
    },
    methods: {
      onafter({file}) {
        this.$nextTick(() => {
          this.uplaodimg(file)
        })
      },
      onbefore(file){
        this.imgIng={
          status: 0
        };
        this.imgUrl.push(this.imgIng)
        this.$emit('before', file);
        return true
      },
      uplaodimg (file) {
        let params = new FormData(); //创建form对象
        params.append(this.fileName, file); //通过append向form对象添加数据//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
        let config = {
          headers: { //添加请求头
            'sessionId': window.sessionStorage.getItem('sessionId'),
            "Content-Type": "multipart/form-data"
          }
        };
        let url = this.url;
        postRequest(url, params, config).then(res => {
          if (res.meta.code == 0) {
            this.imgIng.status = 1;
            this.imgIng.url = res.data
            this.$emit('uplaodResult', this.imgUrl);
          } else {
            window.alert('上传失败');
            let fileList = this.imgUrl;
            this.imgUrl.splice(fileList.indexOf(this.imgIng), 1);
          }
        }).catch(err => {
          window.alert('上传失败');
          let fileList = this.imgUrl;
          this.imgUrl.splice(fileList.indexOf(this.imgIng), 1);
        });
      },
      onOverSize(file, detail){
        this.imgUrl.pop(); // 移除最后一项
        this.$emit('overSize', file);
      },
      delimg(index) {
        this.imgUrl.splice(index, 1);
        this.$emit('delimg',index);
      }
    }
  };
</script>
<style lang="less">
    .vant-custom-uploader{
        padding: 10px;
        .van-uploader {
            display: inline-flex;
            position: relative;
            background: #f2f2f4;
        }
        .van-uploader .van-icon{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        .upimg{
            margin-right: 10px;
            position: relative;
            display: inline-block;
            vertical-align: top;
        }
        .uploaderimg {
            width: 100px;
            height: 100px;
        }
        .up-del{
            position: absolute;
            right: 2px;
            top: 2px;
        }
        /*.up-del.van-icon{*/
        /*font-size: 22px;*/
        /*}*/
      .van-loading{
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
      }
    }

</style>


