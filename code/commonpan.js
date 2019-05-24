
exports.foo = 'bar';

exports.add = function(x,y){
    return x + y
}
//exports === module.exports 他们相等指向同一个对象
//最后return的是module.exports
exports.foo = {
    name:'guangfa',
    age:'18',
    interest:'篮球'
}