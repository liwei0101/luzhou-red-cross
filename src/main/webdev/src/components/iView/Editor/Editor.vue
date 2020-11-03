<template>
    <div>
        <div ref="customeditor">
        </div>
    </div>
</template>

<script>
  import E from 'wangeditor'
  import {postRequest } from '@/libs/axios.js'

  export default {
    name: 'iview-custom-editor',
    props: {
      initData: {
        type: String,
        default: '默认数据'
      },
      uploadImg: {
        type: Boolean,
        default: true
      },
      showLinkImg: {
        type: Boolean,
        default: true
      },
      imgServer: {
        type: Boolean,
        default: true
      },
      upFileBase64: {
        type: Boolean,
        default: true
      },
      uploadUrl: {
        type: String,
        default: 'file/upload'
      },
      uploadImgMaxSize: {
        type: Number,
        default: 100000000
      },
      uploadImgMaxLength: {
        type: Number,
        default: 1
      },
      uploadFileName: {
        type: String,
        default: 'file'
      },
      pasteFilterStyle: {
        type: Boolean,
        default: false
      },
      menus: {
        type: Array,
        default: [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ]
      },
    },
    data() {
      return {
        eidtor:null,
        editorContent: ''
      };
    },
    methods: {
      getContent(){
          this.$emit('getContent', this.editorContent)
      },
      emitData() {
        this.$emit('change', {
          index:this.index,
          editorContent:this.editorContent
        })
      },
      emitFocus() {
        this.$emit('focus')
      },
      emitBlur() {
        this.$emit('blur', this.editorContent)
      },
      emitClear() {
        this.editor.txt.html('');
        this.$emit('emitClear');
      },
      initEditor(){
        this.$emit('initEditor',this.eidtor);
      }
    },
    mounted() {
      var editor = new E(this.$refs.customeditor)

      editor.customConfig.menus = this.menus;
      // 是否去掉粘贴的样式
      editor.customConfig.pasteFilterStyle = this.pasteFilterStyle
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
        this.emitData();
      }
      editor.customConfig.onfocus = () => {
        this.emitFocus();
      }
      editor.customConfig.onblur = (html) => {
        this.editorContent = html
        this.emitBlur();
      }
      // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
      if (this.imgServer) {
        editor.customConfig.uploadImgMaxSize = this.uploadImgMaxSize // 图片大小
        editor.customConfig.uploadImgMaxLength = 1 // 最多几张
        editor.customConfig.customUploadImg = (files, insert)=>{
          if(this.upFileBase64){
             var file = files[0];
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
                postRequest('file/upload', params, config).then(res => {
                  if (res.meta.code == 0) {
                    insert(res.data);
                  } else {
                    window.alert('上传失败');
                  }
                }).catch(err => {
                  window.alert('上传失败');
                });
              }
          }else{
            let params = new FormData(); //创建form对象
            params.append(this.uploadFileName, files[0]); //通过append向form对象添加数据//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
            let config = {
              headers: { //添加请求头
                'sessionId': window.sessionStorage.getItem('sessionId'),
                "Content-Type": "multipart/form-data"
              }
            };
            postRequest(this.uploadUrl, params, config).then(res => {
              if (res.meta.code == 0) {
                insert(res.data);
              } else {
                window.alert('上传失败');
              }
            }).catch(err => {
              window.alert('上传失败');
            });
          }
        }
        
      } else {
        editor.customConfig.uploadImgShowBase64 = this.uploadImg  // 使用 base64 保存图片
      }
      editor.customConfig.showLinkImg = this.showLinkImg
      editor.create();
      editor.txt.html(this.initData)
      this.eidtor = editor;
      this.initEditor();
    }
  };
</script>

<style lang="less"></style>
