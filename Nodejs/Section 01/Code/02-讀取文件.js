//瀏覽器中的 Javascript 是沒有文件操作能力的
//但是 Node 中的 Javascript 具有文件操作能力

// fs 是file-system 的簡寫
// 在 Node 中如果想要進行文件操作, 就必須引入 fs 這個核心模塊
// 在 fs 中, 就提供的所有的文件操作相關的API
// 例如: fs.readFile --> 讀取文件

// 1. 使用 require 方法加載 fs 核心模塊
var fs = require('fs')

// 2. 讀取文件
// 第一個參數就是要讀取的文件路徑
// 第二個參數是一個回調函數
//     讀取成功 :
//         data 就是 讀取到的數據
//         error 就是 null
//     讀取失敗 :
//         data 就是 undefined
//         error 就是錯誤對象
fs.readFile('./data/hello.txt',function (error, data) {
    // <Buffer 74 65 73 74 20 72 65 61 64 20 46 69 6c 65>
    // 文件中存儲的都是二進制 0 1
    // 這裡顯示的是轉為16進制的
    // 所以要通過 toString 轉換
    //console.log(data);

    if(error){
        console.log('讀取文件失敗')
        return
    }
    
    console.log(data.toString())
})

        

    