var http = require('http')

var server = http.createServer()

// request 請求事件處理函數, 需要接收兩個參數:
//    Request 請求對象:
//          請求對象可以用來獲取客戶端的一些請求訊息, 例如請求路徑
//    Response 響應對象:
//          響應對象可以用來給客戶端發送響應訊息
server.on('request', function(request, response){
    console.log('收到客戶端的請求了 路徑為:'+ request.url)

    // response 對象有一個方法: write 可以用來給客戶端發送響應訊息
    // write可以使用多次, 但是最後一定要使用 end來結束響應, 否則客戶端會一直等待
    response.write('hello')
    response.write(' node.js')
    response.end()
})

server.listen(3000, function(){
    console.log('服務器啟動成功, http://127.0.0.1:3000 ')
})