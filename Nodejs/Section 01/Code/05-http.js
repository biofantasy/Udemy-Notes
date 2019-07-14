//你可以使用 Node 非常輕鬆的構建一個 Web 服務器
// 在 Node 中專門提供了一個核心模塊: http
// http 這個模塊的職責就是幫你創建編寫服務器的

// 1. 加載 http 核心模塊
var http = require('http')

// 2. 使用 http.createServer() 方法創建一個Web服務器
//    返回一個 Server 實例
var server = http.createServer()

// 3. 註冊request事件 
// 當客戶端請求過來, 就會自動觸發服務器的request請求事件, 然後執行第二個參數: 回調處理
server.on('request', function(request, response){
    console.log('收到客戶端的請求了 路徑為:'+ request.url)
})

// 4. 綁定端口號, 啟動服務器
server.listen(3000, function(){
    console.log('服務器啟動成功, http://127.0.0.1:3000 ')
})