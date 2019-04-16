import axios from "axios";
// 设置默认访问路径
axios.defaults.baseURL = "http://localhost:3000"

// 请求拦截 响应拦截 Interceptors 拦截器
axios.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    Promise.reject(err)
})

// axios 是基于promise 封装的返回值是一个promise
// 轮播图接口 
// export  es6里面的导出
export let getBannaer = () => {
    return axios.get('/banner')
}
// 首页列表接口 
export let getHomlist = () => {
    return axios.get('/hot')
}

// 通过import 引入的时候 export 导出的会放在一个对象里面
// {getBannaer:get}