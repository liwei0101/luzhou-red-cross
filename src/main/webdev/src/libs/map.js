//封装http请求
import $http from '../libs/http/$http'


/**
 * gsp转为高德地图坐标
 * @param {Float} latitude 纬度
 * @param {Float} longitude 经度
 */
export function gps2amap ({latitude, longitude}) {
  const params = {
    key: '7583ed0365cf02f56637ba6f31e5637d',
    locations: `${longitude},${latitude}`,
    coordsys: 'gps'
  }
  // alert(JSON.stringify(params))

  $http.defaults.baseURL = '';
  return $http.get('http://restapi.amap.com/v3/assistant/coordinate/convert?key='+params.key+'&locations='+params.locations+'&coordsys='+params.coordsys).then(function (res) {
    return Promise.resolve(res)
  }).catch(function (e) {
    $util.Toast({
      message: '网络异常，请检查网络链接并重新尝试',
      duration: 2000
    });
    return Promise.reject(e)
  })
}
