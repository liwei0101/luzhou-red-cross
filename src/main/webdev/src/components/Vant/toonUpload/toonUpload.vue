<template>
  <div>
      <div class="imgbox">
      <template v-for="(item,index) in addPhotosParame.basePhotos">
    			<span class="btn_camera" :style=" 'background-image:url('+  item.photoUrl +')' ">
    				<i @click.stop="delPhoto(index)" class="btn_del"></i>
    			</span>
      </template>
      <span @click.stop="openCameraFun" v-show="addPhotosParame.basePhotos.length < maxLength" class="btn_camera"></span>
    </div>
  </div>
</template>

<script>
import "./toongine.js";
import { postRequest } from "@/libs/http/$http.js";
export default {
  name: "vant-custom-upload",
  props: {
    url: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
      default: 6
    },

  },
  data() {
    return {
      picLen:6,
      picNum: 0,
      addPhotosParame: {
        photos: [],
        basePhotos: []
      }, //前端展示
      imgList: [], // 后端接收
      addActive: []
    };
  },
  methods: {
     //删除一张图片
    delPhoto(index) {
      this.addPhotosParame.basePhotos.splice(index, 1);
      this.imgList.splice(index, 1);
      this.addActive.splice(index, 1);
      this.picNum = this.addPhotosParame.basePhotos.length;
      this.$emit("delPhoto",index);
    },
    openCameraFun() {
      window.toongine.media.chooseImage({
        params: {
          count: (this.maxLength - this.picNum)
        },
        callback: res => {
          if (res && res.code == 0) {
            console.log('aaaaaaaa')
            for (var i = 0; i < res.data.length; i++) {
              this.picNum += 1;
              //前端展示的图片
               this.addPhotosParame.basePhotos.push({
                photoUrl: "data:image/png;base64," + res.data[i].base64,
                mask: true
              });
              //传给后端的信息
              this.imgList.push({
                base64: res.data[i].base64,
                fileType: res.data[i].imageType
              })
              this.uploadFn(res.data[i].base64, res.data[i].imageType);
            }
          }
        }
      });
    },
    uploadFn(base64, fileType) {
      var params = {
        fileStream: base64,
        fileType: "." + fileType
      };
      postRequest(this.url, params).then(res => {
        if (res && res.meta.code == 0) {
          this.addActive.push({
            photoUrl: res.data.url.replace(/\"/g, "")
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.imgbox {
    width: 100%;
    overflow: hidden;
    background: #fff;
    margin-top: 10px;
    padding: 20px 16px;
    padding-right: 0;
    position: relative;
  }
  .btn_camera {
    margin-bottom: 10px;
    display: block;
    width: 80px;
    height: 80px;
    background: url("./images/camera1.png") no-repeat 0 0;
    background-size: 100% 100%;
    margin-right: 8px;
    float: left;
    position: relative;
    /* background: #FFFFFF url("../images/add.png") no-repeat 27px 27px; */
    /* background-size: 32% 32%; */
    /* border: 1px solid #DDDEE3; */
  }
  .btn_camera i.btn_del {
    display: block;
    background: url("./images/icon-delPhoto.png") no-repeat center center;
    background-size: 100% auto;
    width: 23px;
    height: 23px;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .btn_camera:before {
    content: "";
    display: none;
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
</style>