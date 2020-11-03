<template>
    <div>
        <van-swipe-cell :right-width="isRight?rightWidth:0" :left-width="isLeft?leftWidth:0" :on-close="onClose" @click="onclick" :disabled="disabled">
             <!--<span v-if="isLeft"  slot="left">-->
                <slot name="left"  v-if="isLeft"  slot="left" ></slot>
              <!--</span>-->
            <van-cell-group>
                <van-cell :title=title :label="label">
                  <slot></slot>
                  <div slot="icon">
                    <slot name="icon"></slot>
                  </div>
                </van-cell>
            </van-cell-group>
            <!--<span v-if="isRight" slot="right">-->
              <slot name="right" v-if="isRight" slot="right"></slot>
            <!--</span>-->
        </van-swipe-cell>
    </div>
</template>

<script>
  export default {
    name: "vant-custom-swipe-cell",
    props: {
      leftWidth: {
        type: Number,
        default: 65
      },
      rightWidth: {
        type: Number,
        default: 65
      },
      disabled: {
        type: Boolean,
        default: false
      },
      isLeft: {
        type: Boolean,
        default: false
      },
      isRight: {
        type: Boolean,
        default: true
      },
      left: {
        type: String,
        default: '选择'
      },
      right: {
        type: String,
        default: '删除'
      },
      title: {
        type: String,
        default: '单元格'
      },
      label: {
        type: String,
        default: '内容'
      },
    },
    data() {
      return {

      }
    },
    methods: {
      onClose(clickPosition, instance) {
        switch (clickPosition) {
          case 'left':
          case 'cell':
          case 'outside':
            instance.close();
            break;
          case 'right':
        }
      },
      onclick(clickPosition){
        console.log(clickPosition);
      }
    }
  }
</script>
<style lang="less">
    .van-swipe-cell__left,.van-swipe-cell__right{
        color: #fff;
        font-size: 15px;
        width: 65px;
        /*height: 44px;*/
        display: inline-block;
        text-align: center;
        /*line-height: 44px;*/
        background-color: #f44;
        div{
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
        }
    }
</style>


