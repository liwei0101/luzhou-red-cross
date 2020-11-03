import { getSession, setStore } from './storage';
import {Message} from 'iview'
import Vue from 'vue'
import Http from './http/index.js';

// 统一请求路径前缀
let base = '/';
let axios = new Http(base, 15000);
axios.setRequestInterceptors(config => {
    config.headers.sessionId = getSession('sessionId');
    return config;
}, err => {
    Message.error('请求超时');
    return Promise.resolve(err);
})

// http response 拦截器
axios.setResponseInterceptors(response => {
    const data = response.data;

    if (data.meta && data.meta.code == 10002) { // 会话超时
        Vue.bus.emit('login', true);
    }
    return data;
}, (err) => {
    Message.destroy();
    Message.error(err.message);
    return Promise.resolve(err);
});

export const getRequest = axios.getRequest;
export const postRequest = axios.postRequest;
export const postRequestUrl = axios.postRequestUrl;
export const BaseUrl = base ;