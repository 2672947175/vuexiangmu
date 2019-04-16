// 请求接口
import axios from "axios";
// 设置默认访问路径
axios.defaults.baseURL = "http://localhost:3000"

// 请求拦截 响应拦截 Interceptors 拦截器
axios.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    Promise.reject(err)
})
// 轮播接口
export let getBannaer = () => {
    return axios.get('/banner')
}
// 首页列表接口 
export let getHomlist = ()=>{
    return axios.get('/hot')
}


export let getHomeAll=()=>{
    return axios.all([getBannaer(), getHomlist()])
}

// 获取所有数据
export let getListAll = () => {
    return axios.get('/all')
}
// 获取分页数据
export let getpage = (page)=>{
    return axios.get(`page?page=${page}`);
}
// 详情页数数
export let getdetail = (id) => {
    return axios.get(`detail?id=${id}`);
}

//删除商品  
export let deletgood =(goodid)=>{
    return axios.delete(`/deletegood?id=${goodid}`)
 }
 