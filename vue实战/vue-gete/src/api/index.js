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
// 合并接口处理
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

//添加购物车  
export let postgood =(goodid)=>{
    return axios.post(`/postgood?pt=${goodid}`)
 }
// 购物车列表
export let carLiat = ()=>{
    return axios.get('/car')
}
// 加减
export let jajan =(id)=>{
    return axios.get(`/zengja?id=${id}`)
}
// 全选
export let xuangzh = (val)=>{
    return axios.get(`/xuangzhong?val=${val}`)
}
//删除购物车  
export let deletgood =(goodid)=>{
    return axios.delete(`/deletegood?id=${goodid}`)
 }
 