<template>
  <div>
    <div class="park header-nav-box">
      <div class="nav hairline-bottom">
        <van-row tag="div" justify="start" align="top" style="padding:10px;flex:1;">
          <van-col v-for="(item, index) in dataList" :key="index" 
						:span="8" tag="div" style="display:-webkit-flex;align-items:center;">
            <div @click="onChangShowIndex(index)">
              <span class="nav-item">{{ getSelect(index)[selectValue] }}</span>
              <van-icon
                color="inherit"
                size="16px"
                :class-prefix="showIndex == index ? 'van-icon van-icon-arrow-up' : 'van-icon van-icon-arrow-down'"
                tag="i"
              ></van-icon>
            </div>
          </van-col>
        </van-row>
        <van-icon
          v-if="showSearchBtn"
          @click="clickSearch"
          color="inherit"
          size="22px"
          class-prefix="van-icon van-icon-search"
          tag="i"
          style="border-left:1px solid  rgb(241, 241, 241) ;padding:0px 0px 0px 5px; cursor: pointer;"
        ></van-icon>
      </div>
      <div class="county-wrap" v-if="showList.length>0" :style="'top:'+top+'px'">
        <div class="county-list">
          <div
            class="county-item hairline-bottom"
            v-for="(item,index) in showList"
						:key="index"
            @click.stop="onSelect(item)"
          >
            <span :style="{color:item[selectKey] == vmSelect[selectKey] ? active: ''}">{{ item[selectValue] }}</span>
            <i v-if="item[selectKey] == vmSelect[selectKey]"></i>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-select",
  props: {
    showSearchBtn: {
      type: Boolean,
      default() {
        return false;
      }
    },
    active: {
      type: String,
      default: 'red'
    },
    selectList: {
      type: Array,
      default() {
        return [];
      }
    },
    selectValue:{
        type: String,
        default: 'name'
    },
    selectKey:{
        type: String,
        default: 'id'
    },
    dataList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
			showIndex: -1,
        top:null
		}
  },
    mounted(){
      let dom = document.getElementsByClassName('header-nav-box')[0];
        // console.log(dom.clientHeight)
        this.top = dom.offsetTop;
    },
	computed: {
		vmSelect () {
			return this.getSelect(this.showIndex)
		},
		showList () {
			return this.dataList[this.showIndex] || []
		}
	},
  methods: {
		getSelect (index) {
      let select = this.selectList[index]
			return select && select[this.selectValue] ? select : this.dataList[index][0]
		},
		onChangShowIndex(index) {
			this.showIndex = this.showIndex === index ? -1 : index
		},
		onSelect(item) {
			if (this.showIndex>=this.selectList.length) this.selectList.push(item)
			else this.selectList[this.showIndex] = item
			this.$emit('on-change', this.showIndex, item, this.selectList)
			this.onClose()
		},
		onClose() {
			this.showIndex = -1
		},
    /*
     * 点击搜索按钮
     */
    clickSearch() {
      this.$emit("on-search-click");
		},
		
  }
};
</script>

<style scoped>
.park {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.nav {
  padding: 5px 10px;
  display: -webkit-flex;
  align-items: center;
  position: relative;
  z-index: 1000;
  background: #fff;
}
.nav-item {
  font-size: 14px;
  color: #222;
  margin: 0px 4px 0px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  width: 70px;
}
.county-wrap {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.county-list {
  position: absolute;
  background: #fff;
  max-height: 300px;
  overflow: auto;
  width: 100%;
  top: 51px;
  left: 0;
  padding-left: 20px;
}
.county-item {
  padding: 10px 0;
  font-size: 14px;
  position: relative;
}
.county-item i {
  position: absolute;
  top: 15px;
  right: 14px;
  width: 15px;
  height: 12px;
  background: url(./images/chooseOn.png) no-repeat;
  background-size: 100% 100%;
}
.hairline-bottom {
  position: relative;
  border: none;
}
.hairline-bottom::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: 1px solid #dddee3;
  width: 100%;
  -webkit-transform: scale(1, 0.5);
  transform: scale(1, 0.5);
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  z-index: 1;
}
.active {
  color:rgb(0, 153, 255);;
}
</style>

