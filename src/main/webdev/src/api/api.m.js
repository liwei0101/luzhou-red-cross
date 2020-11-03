import {getRequest, postRequest , BaseUrl } from '@/libs/axios.js'
/**
 * 格式化返回值
 */
const formatResponse = (res) => {
  if (res.meta && res.meta.code === 0) {
    let data = res.data
    return data
  } else {
    throw (res.meta && res.meta.message) || '操作失败'
  }
}


