// npm init -y 一键初始化
// npm install express 
// cors 跨域中间件 body-parser
// node 的框架

let express = require('express')
let app = express()
// let cors = require('cors')
// app.use(cors())
// let bodyParser = require('body-parser')
// app.use(bodyParser.json({}))



app.get('/list',function(req,res){
    res.json({name:'lili',age:'大胜靠德'})
})
app.post('/sid',function(req,res){
    res.json('post 请求')
})
// app.delete('/s',function(req,res){
//     res.json({})
// })
app.listen(3003,function(){
    console.log('3003启动')
})
