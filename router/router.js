let express = require('express'); //express提供的方式
//创建路由容器
let router = express.Router();

//引入我们自己封装的查询方法
let getFindData = require('../common/getFileData')
// 把路由挂载到router
router.post('/getListData',(req,res) =>{  //查找全部数据
    getFindData.find(function (err,data){
        if(err){
            return res.status(500).send('Server error .')
        }
        res.send(data)
    })
})

router.post('/addData',(req,res) =>{  //新增数据接口
    getFindData.save(req.body,(err,data) =>{
        if(err){
           return res.status(500).send('服务器错误')
        }
        let reData = {
            code:200,
            data:'新增成功'
        }
        res.send(reData)
    })
})

module.exports = router  //导出在启动页面上使用他

