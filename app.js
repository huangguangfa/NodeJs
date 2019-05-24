//安装Node框架express指令 npm install express --save
let express = require('express'); //引入第三方包
let app = express(); //创建服务器应用程序
let bodyParser = require('body-parser'); //引入解析POST请求体数据的中间件(插件)

//公开指定目录
//可以通过/data/xxx来访问data下的所有资源
app.use('/data/',express.static('./data/'));

//配置 body-parser 中间件 (插件,专门用来解析POST请求体)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 分模块引入router (请求方法)
let router = require('./router/router')
//使用它
app.use(router)

app.listen(3000,function(error,data){  //启动服务器
    console.log('node服务已经启动访问：http://192.168.0.4:3000/')
})



