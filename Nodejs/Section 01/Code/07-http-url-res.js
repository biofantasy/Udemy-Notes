var http = require('http')

var sever = http.createServer();

sever.on('request', function(req, res){

    console.log('收到客戶端的請求路徑為:', req.socket.remoteAddress, req.socket.remotePort)

    // 直接end同時write
    //res.end('hello node.js')
    
    // 根據不同的請求路徑發送不同的響應結果
    // 1. 獲取請求路徑
    //    req.url 獲取到的是端口號之後的那一部份路徑
    //    也就是說所以有的url都是以 / 開頭的
    // 2. 判斷路徑處理響應

    // 響應內容只能是 字符串 或 二進制數據
    // JSON.stringfy()

    var url = req.url

    if(url === '/')
    {
        res.end('index page')
    }
    else if (url === '/login')
    {
        res.end('login page')    
    }
    else
    {
        res.end('404 Not Found.')       
    }
})

sever.listen(3000, function(){
    console.log('服務器啟動成功, http://127.0.0.1:3000 ')
})