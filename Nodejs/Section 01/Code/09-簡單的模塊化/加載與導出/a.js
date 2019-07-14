// require 方法有兩個作用:
//  1. 加載文件模塊並執行裡面的代碼
//  2. 拿到被加載文件模塊導出的接口對象
//
//  在每一個文件模塊中都提供了一個對象 : exports
//  exports 默認是一個空對象
//  要做的就是把所有需要被外部訪問的成員掛載到exports中
var result = require('./b')

console.log(result.foo)
console.log(result.foo1)

console.log(result.add(10,30))