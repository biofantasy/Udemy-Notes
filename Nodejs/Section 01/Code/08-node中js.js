//用來獲取機器訊息
var os = require('os')
//用來操作路徑
var path = require('path')

//獲取當前機器 CPU 的信息
console.log(os,cpu())

// mem = Memory
console.log(os.totalmem())

// extname extension name
console.log(path.extname('c:/a/b/c/d/hello.txt'))