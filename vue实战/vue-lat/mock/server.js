// 配置接口
let htttp = require('http')
let url = require('url')
let fs = require('fs')
let fsPromsie = fs.promises
let banner = require('./banner')
function redList(){
   return fsPromsie.readFile('./list.json','utf8').then(data=>{
    //    console.log(data)
       return JSON.parse(data)
    
   })
}
// 创建服务器
htttp.createServer((req, res) => {
    // 配置跨域 
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 设置编码格式
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // // 结构赋值和查询参 // url.parse(req.url,true) 路径
    let { pathname, query } = url.parse(req.url, true)
    // // 轮播图接口
    if (pathname == '/banner') {
        res.end(JSON.stringify(banner))
        return
    }
    // 列表接口
    if (pathname =='/hot'){
        redList().then(data=>{
            let hotlist = data.slice(0,6)
            res.end(JSON.stringify(hotlist))
        })
        return 
    }

    // 列表页面接口
    if(pathname = '/page'){
        // 获取到前段页面的数量
        let page =query.page
        if (page =='undefined'){page=1}
        console.log(page)
        let hasmort = true
        let maxpage = page*5
        redList().then(data => {
            let pagedata = data.slice(maxpage - 5, maxpage)
            hasmort = maxpage >= data.length?false:true
            res.end(JSON.stringify({hasmort,pagedata}))
        })
        return 
    }
    res.end('123456')

}).listen(3010, () => {
    console.log(3010 + '启动成功')
})