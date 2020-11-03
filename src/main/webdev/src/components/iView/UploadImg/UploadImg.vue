<template>
  <div class="iview-custom-upload-list">
    <div 
    class="demo-upload-list" 
    :key="index" v-for="(item,index) in uploadList"
    :style="'width:'+(heightImg-0+2)+'px;height:'+(heightImg-0+2)+'px;line-height: '+(heightImg-0+2)+'px;'"    
    >
      <template v-if="item.status === 'finished'">
        <img :src="item.url">
        <div class="demo-upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
        </div>
      </template>
      <template v-else>
        <Progress :percent="percent" hide-info></Progress>
      </template>
    </div>
    <Upload
        v-show="uploadList.length < imgsLength"
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultListData"
        :format="['jpg','jpeg','png']"
        :max-size="maxSize"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        :multiple='multiple'
        :name="name"
        :type="type"
        :accept="accept"
        :with-credentials="withCredentials"
        :data="data"
        :action="action"
        :style="'display: inline-block;width:'+heightImg+'px;'">
          <div :style="'width: '+heightImg+'px;height:'+heightImg+'px;line-height: '+heightImg+'px;'">
          <Icon :type="imgType" :size="imgSize"></Icon>
          <slot></slot>
      </div>
    </Upload>
    <Modal title="View Image" v-model="visible">
      <img :src="imgName" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>
<script>
  import {postRequest } from '@/libs/axios.js'
export default {
  name: "iview-custom-select-img",
  props: {
    defaultList: {
      type: [String,Array],
      default:''
    },
    imgsLength: {
      type: Number,
      default: 2
    },
    action: {
      type: String,
      default: "file/upload"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    upFileBase64:{
      type: Boolean,
      default: false
    },
    paste: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "file"
    },
    showList: {
      type: Boolean,
      default: true
    },
    heightImg: {
      type: Number,
      default: 58
    },
    imgSize: {
      type: Number,
      default: 20
    },
    imgType: {
      type: String,
      default: 'ios-camera'
    },
    type: {
      type: String,
      default: 'drag'
    },
    accept: {
      type: String,
      default: 'image/gif,image/jpeg,image/png'
    },
    format: {
      type: Array,
      default: () => {
        return ['jpg','jpeg','png'];
      }
    },
    maxSize: {
      type: Number,
      default: 100000000
    },
      withCredentials:{
          type: Boolean,
          default: false
      },
      data:{
          type: Object,
          default: () => {
              return {};
          }
      }
  },
  data() {
    return {
      imgName: "",
      visible: false,
      uploadList: [],
      percent:0,
      defaultListData:[],
      imgIng:null
    };
  },
  watch:{
      'defaultList'(val){
        if(typeof val === 'string'){
          this.uploadList = []
          this.uploadList.push({
            status:'finished',
            url:val
          });
        }else{
          this.uploadList = []
          for(let item of val){
            this.uploadList.push({
              status:'finished',
              url:item
            });
          }
        }
    }
  },

  methods: {
    handleView(url) {
      this.imgName = url;
      this.visible = true;
      this.$emit('handleView',url);
    },
    handleRemove(file) {
      const fileList = this.uploadList;
      this.uploadList.splice(fileList.indexOf(file), 1);
      this.$emit('handleRemove',file);
    },
    handleFormatError (file) {
      this.$emit('handleFormatError',file);
    },
    handleMaxSize(file) {
      this.$emit('handleMaxSize',file);
    },
    handleBeforeUpload(file){
      this.file = file; 
      this.handleUpload();
      return false;
    },
    handleUpload() {
      var file = this.file;
      this.imgIng = {
        status:0
      }
      console.log(file.size)
      this.percent=0;
      this.uploadList.push(this.imgIng)
      let time = 10;
      if(file.size>100000){
          time = 20;
      }else if(file.size>100000){
          time = 25;
      }else if(file.size>300000){
          time = 30;
      }else if(file.size>400000){
          time = 40;
      }else if(file.size>500000){
          time = 50;
      }else if(file.size>600000){
          time = 60;
      }else if(file.size>700000){
          time = 80;
      }else if(file.size>1000000){
          time = 120;
      }else if(file.size>2000000){
          time = 150;
      }else if(file.size>3000000){
          time = 200;
      }
      for(var i=0; i<94;i++){
        setTimeout(()=>{
          i++;
          this.percent++
        },time);
      }
      if(this.upFileBase64){
          var fileType = file.type.split("\/")[1];
          if (!/image\/\w+/.test(file.type)) {
              alert("只能选择图片");
              return false;
          }
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => { 
            let baseData = e.currentTarget.result;
            let params = {
                base64:e.currentTarget.result.split(',')[1],
                fileType:fileType
            }; //创建参数对象
            let config = {
              headers: { //添加请求头
                'sessionId': window.sessionStorage.getItem('sessionId'),
                "Content-Type": "multipart/form-data"
              }
            };
            postRequest(this.action, params, config).then(res => {
              if (res.meta.code == 0) {
                this.imgIng.url = res.data;
                this.imgIng.status = 'finished';
                this.$emit('handleSuccess',{
                  res, file
                });
                return false;
              } else {
                const fileList = this.uploadList;
                this.uploadList.splice(fileList.indexOf(this.imgIng), 1);
                this.$emit('handleError',{
                  res, file
                });
              }
            }).catch(err => {
              const fileList = this.uploadList;
            this.uploadList.splice(fileList.indexOf(this.imgIng), 1);
            this.$emit('handleError',{
              res, file
            });
            });
          }
      }else{
        let params = new FormData(); //创建form对象
        params.append(this.name, file); //通过append向form对象添加数据//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
        let config = {
          headers: { //添加请求头
            'sessionId': window.sessionStorage.getItem('sessionId'),
            "Content-Type": "multipart/form-data"
          }
        };
        postRequest(this.action, params, config).then(res => {
            if (res.meta.code == 0) {
              this.imgIng.url = res.data;
              this.imgIng.status = 'finished';
              this.$emit('handleSuccess',{
                res, file
              });
          } else {
            const fileList = this.uploadList;
            this.uploadList.splice(fileList.indexOf(this.imgIng), 1);
            this.$emit('handleError',{
              res, file
            });
          }
        }).catch(err => {
          const fileList = this.uploadList;
            this.uploadList.splice(fileList.indexOf(this.imgIng), 1);
            this.$emit('handleError',{
              res, file
            });
        });
      }
    }
  },
};
</script>
<style lang="less">

.iview-custom-upload-list{
  .demo-upload-list {
    display: inline-block;
  
    text-align: center;
    
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 4px;
  }
  .demo-upload-list img {
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover {
    display: block;
  }
  .demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
}

</style>