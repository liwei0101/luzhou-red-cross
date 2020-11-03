import  './config';
import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/common/reset.css';
import '@/common/m.css';
import store from './store';

import { getQueryString} from '@/libs/util.js';
import { setStore, getStore, removeStore } from '@/libs/storage';
import { getRequest, postRequest, $http} from '@/libs/http/$http.js';


// 组件库未使用请删除
// 有赞
import vant from 'vant';
import 'vant/lib/index.css';
Vue.use(vant);


// 公用组件库: 对资源包大小、性能有影响(建议：手动引入项目所需组件)
import '@/components/index.js';

//Vecharts 图表
import VCharts from 'v-charts';
Vue.use(VCharts);

//vue-echarts 图表
import ECharts from 'vue-echarts';
Vue.component('v-chart', ECharts);
window.echarts = ECharts;


// 挂载全局使用的方法
Vue.prototype.$http = $http; 
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;

Vue.prototype.setStore = setStore;
Vue.prototype.getStore = getStore;
Vue.prototype.removeStore = removeStore;

Vue.config.productionTip = false;





new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')