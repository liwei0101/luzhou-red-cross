import axios from 'axios'
/**
 * http服务类, axios 实例的封装类
 * @author stj
 */
export default class Http {

    /**
     * 默认ContentType类型
     */
    static ContentType = {
        json: 'application/json',
        form: 'application/x-www-form-urlencoded'
    }

    constructor (baseURL='/', timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.getInstance = this.getInstance.bind(this)
        this.getRequest = this.getRequest.bind(this)
        this.postRequest = this.postRequest.bind(this)
        this.postRequestUrl = this.postRequestUrl.bind(this)
        this.formatResponse = this.formatResponse.bind(this)
    }

    getInstance () {
        return this.instance
    }
    /**
     * 设置axiso实例的defaults信息
     * 具体配置信息参见 https://github.com/axios/axios#config-defaults
     * @param {Object} config
     */
    setDefaults (config) {
        Object.assign(this.instance.defaults, config)
    }
    /**
     * 设置axiso实例的请求头信息
     * 具体配置信息参见 https://github.com/axios/axios#config-defaults
     * @param {String} key 名称
     * @param {Any} value 内容
     */
    setHeaders (key, value) {
        this.instance.defaults.headers.common[key] = value
    }
    /**
     * 设置axios实例的请求拦截器
     * 具体配置信息参见 https://github.com/axios/axios#interceptors
     * @param {Function} resolve 拦截器成功信息
     * @param {Function} reject 拦截器失败信息
     */
    setRequestInterceptors(resolve, reject) {
        this.instance.interceptors.request.use(resolve, reject)
    }
    /**
     * 设置axios实例的响应拦截器
     * 具体配置信息参见 https://github.com/axios/axios#interceptors
     * @param {Function} resolve 拦截器成功信息
     * @param {Function} reject 拦截器失败信息
     */
    setResponseInterceptors(resolve, reject) {
        this.instance.interceptors.response.use(resolve, reject)
    }
    /**
     * 兼容老版本的请求
     * @param {String} url 请求路径
     * @param {Object} params 参数
     * @param {Object} config  配置项
     */
    async getRequest (url, params, config) {
        return this.instance.request({
            method: 'get',
            url,
            params,
            ...config
        })
    }
    /**
     * 兼容老版本的请求
     * @param {String} url 请求路径
     * @param {Object} params 参数
     * @param {Object} config  配置项
     */
    async postRequest (url, data, config) {
        return this.instance.request({
            method: 'post',
            url,
            data,
            headers: {
                'Content-Type': Http.ContentType.json
            },
            ...config
        })
    }

    /**
     * 兼容老版本的请求
     * @param {String} url 请求路径
     * @param {Object} params 参数
     * @param {Object} config  配置项
     */
    async postRequestUrl (url, data, config) {
        const res = await postRequest(url, data, config)
        return this.formatResponse(res)
    }

    /**
     * 格式化返回值
     */
    formatResponse = (res) => {
        if (res.meta && res.meta.code === 0) {
            let data = res.data
            return data
        } else {
            throw (res.meta && res.meta.message) || '操作失败'
        }
    }
}
