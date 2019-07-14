// require 是一個方法
// 它的作用就是用來加載模塊的
// 在 Node 中, 模塊有三種:
//    具名的核心模塊, 例如 fs, http
//    用戶自己編寫的文件模塊
//        相對路徑必須加 ./ --> ./不能省略
//        可以省略後綴名 .js --> 推薦
//  在Node中, 沒有全局作用域, 只有模塊作用域
//   外部訪問不到內部
//   內部也看不到外部
//  既然是模塊作用域, 模塊間如何通信

var foo = 'aaa'

console.log('a start')

require('./b.js')

console.log('a end')

console.log(foo)