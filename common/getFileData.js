//封装公共数据操作文件模块
var fs = require('fs');

var dbPath = './data/db.json';
//查找所有
exports.find = function(callback){
    fs.readFile(dbPath, (err,data) =>{
        if(err){
            return callback(err)
        }
        callback(null , JSON.parse(data)) 
    })
}

// 添加保存
exports.save = function(obj , callback){
    fs.readFile(dbPath , (err,data) =>{
        if(err){
            return callback(err)
        }
        let Data = JSON.parse(data).list //字符串变成对象
        obj.id = Data.pop().id + 1
        Data.push(obj);  //新增的数据push进来
        let findData = JSON.stringify({   //转为字符串
            list : Data
        })
        fs.writeFile(dbPath,findData,(err) =>{  //写入文件
            if(err){return callback(err)}
            callback(null)
        })
    })
}

// 更新
exports.undate = function(){

}

// 删除
exports.delete = function(){

}