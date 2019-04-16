import axios from "axios"
// 设置默认地址
axios.defaults.baseURL ="http://localhost:3010"
// 设置请求数据过滤拦截
axios.interceptors.response.use((res)=>{
    // 只有data的能获取 其他的都拦截
    return res.data
}), (err)=>{
    Promise.reject(err)
}
// 导出banner数据接口
export let getBanner = ()=>{
    return axios.get('/banner')
}
// 导出列表数据接口
export let getList = ()=>{
    return axios.get('/hot')
}
// 导出列表页
export let getpage = (page) => {
    return axios.get(`/page?page=${page}`)
}