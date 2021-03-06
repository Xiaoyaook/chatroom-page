//  axios的默认配置
export default {
  method: 'post',
  // 基础url前缀
  baseURL: 'http://localhost:8082',
  // 请求头信息
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' // application/json
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false
  // 返回数据类型
  // responseType: 'json'
}
