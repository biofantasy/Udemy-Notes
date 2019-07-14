var fs = require('fs')

// 第一個參數: 寫入的文件路徑
// 第二個參數: 文件內容
// 第三個參數: 回調函數
//     error:
//      文件寫入成功 :
//         error 就是 null
//      文件寫入失敗 :
//         error 就是錯誤對象

fs.writeFile('./data/你好.md', 
'大家好, 給大家介紹一下我是Node.js',
function (error){
    if(error)
    {
        console.log('文件寫入失敗 : ' + error)
        return
    }
    console.log('文件寫入成功')
})