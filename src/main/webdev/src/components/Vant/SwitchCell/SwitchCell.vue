<template>
  <div class="vant-custom-switch-cell">
    <div v-if="theme!=='checkmark'">
      <van-cell-group >
        <van-switch-cell
          v-model="checked"
          :title="title"
          :disabled="disabled"
          :active-color="activeColor"
          :inactive-color="inactiveColor"
          @change="change"
        />
      </van-cell-group>
    </div>
    <div
      :class="square?'square vant-custom-check':'vant-custom-check'"
      v-if="theme==='checkmark'"
      class="switchcell"
     >
      <van-cell-group>
        <van-cell
          :title="title"
          @click="toggle()"
        >
          <van-icon :name="checked ? active : normal" :color="activeColor"/>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "vant-custom-switch-form",
  props: {
    square: {
      type: Boolean,
      default: true
    },
    mainData: {
      type: Boolean,
      default: null
    },
    title: {
      type: String,
      default: "单选表单"
    },
    activeColor: {
      type: String,
      default: "#1989fa"
    },
    inactiveColor: {
      type: String,
      default: "#fff"
    },
    theme: {
      type: String,
      default: "switch"
    },
    active: {
      type: String,
      default: "success"
    },
    disabled: {
      type: Boolean,
      default: null
    },
  },
  data() {
    return {
      checked: false,
      normal:''
    };
  },
  watch: {
      mainData (value) {
        this.checked = value
        this.$emit("input", value);

      }
  },
  mounted() {
    this.checked = this.mainData;

  },
  methods: {
    change(val) {
      this.checked = this.mainData;
      this.$emit("input", val);
      this.$emit('change',val);
    },
    toggle(val) {
      this.checked = !this.checked;
      this.$emit("input", this.checked );
    }
    
  }
};
</script>
<style lang="less">
.vant-custom-switch-cell{
    .vant-custom-check .van-cell__value .van-icon {
      height: 31px;
      line-height: 31px;
    }
    .square {
      .van-checkbox__icon--round .van-icon {
        border-radius: 2px;
      }
    }
    .switchcell .van-icon {
      font-size: 28px;
    }
    .switchcell .van-checkbox__label--disabled i {
      opacity: 0.5;
    }
}

</style>


