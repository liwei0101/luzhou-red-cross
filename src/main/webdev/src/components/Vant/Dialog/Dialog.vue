<template>
  <div class="vant-custom-dialog">
    <van-dialog 
      :message-align="messageAlign"
      :cancel-button-color="cancelButtonColor"
      :confirm-button-color="confirmButtonColor"
      :cancel-button-text="cancelButtonText"
      :confirm-button-text="confirmButtonText"
      :show-confirm-button="showConfirmlButton"
      :show-cancel-button="showCancelButton"
      :overlay="overlay"
      :close-on-click-overlay="closeOnClickOverlay"
      :lock-scroll="lockScroll"
      v-model="show" 
      :title="title" 
      @confirm="confirm" @cancel="cancel">
      
      <slot></slot>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "vant-custom-dialog",
  props: {
    showDig: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    messageAlign: {
      type: String,
      default: null
    },
    cancelButtonColor: {
      type: String,
      default: null
    },
    confirmButtonColor: {
      type: String,
      default: null
    },
    cancelButtonText: {
      type: String,
      default: null
    },
    confirmButtonText: {
      type: String,
      default: null
    },
    showConfirmlButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    };
  },
   watch: {
      showDig: {
         handler(val) {
         this.show = val;
         }
      }
   },
  methods: {
    confirm() {
      this.$emit("input", false);
      this.$emit("confirm");
    },
    cancel(index) {
      this.$emit("input", false);
      this.$emit("cancel");
    }
  }
};
</script>

<style lang="less" scoped>
</style>
