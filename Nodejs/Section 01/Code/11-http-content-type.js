var http = require('http')

var server = http.createServer();

server.on('request', function(req, res){
    console.log('收到客戶端的請求路徑為:', req.socket.remoteAddress, req.socket.remotePort)

    // 在服務端默認發送的數據, 其實是utf-8 編碼的內容
    // 但瀏覽器不知道你是 utf-8 編碼的內容
    // 瀏覽器在無指定服務器響應內容的編碼情況下 會按照當前操作系統的默認編碼去解析
    // 中文 繁體 big5 簡體 gbk
    // 解決方法 就是 直接告訴瀏覽器 response 文字編碼
    // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    // res.end('Hello 世界')

    var url = req.url

    if(url === '/plain')
    {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('Hello 世界')
    }
    else if (url === '/html')
    {
        //發送html 字符串 則要指定成 text/html
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<p>Hello html <a href="#">點我</a> </p>')
    }
})

server.listen(5000, function(){
    console.log('Sever is runnung... http://127.0.0.1:5000 ')
})