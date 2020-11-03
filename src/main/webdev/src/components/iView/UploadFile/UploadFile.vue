
<template>
    <div>
      <Upload
          :action="action"
          :headers="headers"
          :multiple="multiple"
          :paste="paste"
          :disabled="disabled"
          :name="name"
          :show-upload-list="showList"
          :type="type"
          :accept="accept"
          :format="format"
          :max-size="maxSize"
          :default-file-list="defaultFileList"
          :with-credentials="withCredentials"
          :data="data"
   
          :before-upload="beforeUpload"
          :on-progress='onProgress'
          :on-success="onSuccess"
          :on-error="onError"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-exceeded-size="onExceededSize"
        >
         <!-- :on-format-error="handleFormatError" -->
               <!-- :before-upload="beforeUpload" -->
          <slot>
          </slot>
      </Upload>
    </div>
</template>
<script>
import {postRequest } from '@/libs/axios.js'
export default {
  name: "iview-custom-upload-data",
  props: {
    action: {
      type: String,
      default: "file/upload"
    },
    headers: {
      type: Object,
      default: () => {
        return {};
      }
    },
    multiple: {
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
    type: {
      type: String,
      default: "select"
    },
    accept: {
      type: String,
      default: null
    },
    format: {
      type: Array,
      default: () => {
        return [];
      }
    },
    maxSize: {
      type: Number,
      default: 100000000
    },
      defaultFileList:{
          type: Array,
          default: () => {
              return [];
          }
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
  methods: {
    onProgress(event, file, fileList){
       this.$emit('onProgress',{
        event, file, fileList
       })
    },
    onSuccess(event, file, fileList){
      console.log(23);
       this.$emit('onSuccess',{
         event, file, fileList
       })
    },
    onError( error, file, fileList){
        this.$emit('onError',{
          event, file, fileList
        })
    },
    onPreview(file){
      this.$emit('onPreview',file)
    },
    onRemove(file, fileList){
      this.$emit('onRemove',{
        file, fileList
      })
    },
    onExceededSize(file, fileList){
      this.$emit('onExceededSize',{
        file, fileList
      })
    },
    beforeUpload(file) {
      const check = true;
      this.$emit('beforeUpload',file)
      return check;
    },
    handleFormatError(file) {
      this.$emit('handleFormatError',file)
    }
  }
};
</script>