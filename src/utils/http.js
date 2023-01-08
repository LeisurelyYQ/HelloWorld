// 封装请求
// 分为，请求拦截，相应拦截
//通过：axios 来封装请求
// 第一步：下载axios  npm i axios 
// 导入axios
import axios from 'axios'
// 导入Toast 轻提示组件
import { Toast } from 'vant'
// 创建axios 实列
let toast = null
const instance = axios.create({
    baseURL: 'http://www.young1024.com:1234/',  //根域名：请求接口的根域名
    method: 'GET'
})
// 请求拦截

instance.interceptors.request.use((config) => {
    toast = Toast.loading({
        message: '正在加载中',
        duration: 200,
    })
    return config
})
// 响应拦截：数据请求到了，需要把提示关了，其他拦截的也需要关
instance.interceptors.response.use((res) => {
    toast.clear();
    return res.data
})

export default instance