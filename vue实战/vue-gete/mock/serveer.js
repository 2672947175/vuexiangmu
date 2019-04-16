// 
let htttp = require('http')
let url = require('url')
let fs = require('fs')
let fsPromsie = fs.promises
let banner = require('./banner')
// 请求json文件
function radList(url) {
    //  readFile 读取JSON
    return fsPromsie.readFile(url, 'utf8').then(data=>{
        // 把Json 转换成数组
        return JSON.parse(data)
    })
}
// 写入json文件
function writList(url,data) {
    //函数的返回值如果是promise 可以直接.then()  
    // writeFile 写入JSON 文件
    return fsPromsie.writeFile(url,JSON.stringify(data), 'utf8')
}
// 创建服务器
htttp.createServer((req, res) => {
    // cors 跨域资源共享
    res.setHeader('Access-Control-Allow-Origin', '*')
    // Access - Control - Allow - Origin
    // 设置编码格式 plain 普通文本
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // 结构赋值和查询参
    // url.parse(req.url,true) 路径
    let { pathname, query } = url.parse(req.url, true)
    // 轮播图接口
    if (pathname === '/banner') {
        res.end(JSON.stringify(banner))
        return
    }
    // 首頁 
    if(pathname === "/hot"){
        radList('./list.json').then(data => {
            // 截取6条数据
            let hotdata = data.slice(0,6)
           //响应
           res.end(JSON.stringify(hotdata))
        })
        return
    }
    // 列表页接口 全部数据
    if(pathname ==='/all'){
        radList('./list.json').then(data => {
            res.end(JSON.stringify(data))
        })
        return
    }
    // 分页接口  http://localhost:3000/page?page=1
    if(pathname ==='/page'){
        // 取到前端传的页数
        let page = query.page;
        if(page=='undefined'){page=1}
        let hasmore = true
        let maxpage = page * 5
        // 第一页的数据 0-5 2页6-10
        radList('./list.json').then(data=>{
            let pagedata = data.slice(maxpage-5, maxpage)
            hasmore=maxpage>=data.length?false:true
            res.end(JSON.stringify({hasmore,pagedata}))
        })
        return
    }
    // 详情页页面接口
    if (pathname === '/detail') {
        let id = query.id
        radList('./list.json').then(data=>{
            let single = data.find(item => item.id == id)
            if (!single){
                res.end(JSON.stringify({}))
            }
            res.end(JSON.stringify(single))
        })
        // 一定要加加return
        return
    }
    // 真加
    if(pathname === '/postgood'){
        let pt = query.pt
        radList('./gouwu.json').then(data=>{
            function ssa(abb){
                let pp =JSON.parse(abb)
                let acs = data.find(item=>item.id == pp.id)
                if(!acs){
                    data.unshift(pp)
                    return 
                }
                acs.count = pp.count
                acs.xuanzhong = pp.xuanzhong
            }
            ssa(pt)
            writList('./gouwu.json',data).then(data=>{
                res.end(JSON.stringify({code:200,pt}))   
            })
        })
        // 一定要加加return
        return
    }
    // 加减
    if(pathname==='/zengja'){
        let id = query.id
        radList('./gouwu.json').then(data => {
           let datr  = data.find(item=>item.id==id)
             res.end(JSON.stringify(datr))
         })
         return
    }
    // 购物车列表
    if(pathname === '/car'){
        radList('./gouwu.json').then(data => {
            res.end(JSON.stringify(data))
        })
        return
    }
     // 购物全选
     if(pathname === '/xuangzhong'){
         let val = query.val
        radList('./gouwu.json').then(data => {
            if(val=='true'){
                data.forEach(check => check.xuanzhong = true)
            }else {
                data.forEach(check => check.xuanzhong = false)
            }
           writList('./gouwu.json',data).then(data=>{
            res.end(JSON.stringify({code:200,val}))
            })
        })
        return
    }
    // 删除
    if(pathname === '/deletegood'){
        let id = query.id
        radList('./gouwu.json').then(data=>{
            let newgood = data.filter(item => item.id != id)
            writList('./gouwu.json',newgood).then(data=>{
                res.end(JSON.stringify({code:200,id}))
            })
        })
        // 一定要加加return
        return
    }
    res.end('123456')

}).listen(3000, () => {
    console.log(3000 + '启动成功')
})
