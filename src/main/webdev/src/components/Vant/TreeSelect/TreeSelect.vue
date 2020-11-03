
<template>
  <div>
    <van-tree-select
      :items="mainData"
      :main-active-index="index"
      :active-id="ids"
      @navclick="onNavClick"
      @itemclick="onItemClick"
    />
  </div>
</template>
<script>
export default {
  name: "vant-custom-tree-select",
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    leftValue: {
      type: String,
      default: "text"
    },
    leftKey: {
      type: String,
      default: "id"
    },
    able: {
      type: String,
      default: "able"
    },
    children: {
      type: String,
      default: "children"
    },
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      index: 0,
      ids: 2
    };
  },
  computed: {
    mainData() {
      let list_ = [];
      for (var index in this.items) {
        let item = this.items[index];

        let sublist = [];
        for (var index_ in item[this.children]) {
          let subitem = item[this.children][index_];
          let text = Object.assign(
            {
              text: subitem[this.leftValue],
              id: subitem[this.leftKey],
              disabled: subitem[this.able]
            },
            subitem
          );
          sublist.push(text);
        }
        let aa = {
          text: item[this.leftValue],
          id: item[this.leftKey],
          disabled: item[this.able],
          children: sublist
        };
        aa["children"] = sublist;

        let test1 = Object.assign(item, aa);
        list_.push(test1);
      }
      return list_;
    }
  },
  watch: {
    mainActiveIndex(val) {
      this.index = val;
    },
    activeId(val) {
      this.ids = val;
    }
  },
  methods: {
    onNavClick(index) {
      this.index = index;
      this.$emit("onNavClick", index);
    },
    onItemClick(data) {
      this.ids = data.id;
      this.$emit("onItemClick", data);
    }
  }
};
</script>
<style lang="less">
</style>


