// ip 地址用來定位計算機
// 端口號用來定位具體應用程序
// 所有需要聯網通信的應用程序都會占用一個端口號

var http = require('http')

var sever = http.createServer();

sever.on('request', function(req, res){
    console.log('收到客戶端的請求路徑為:', req.socket.remoteAddress, req.socket.remotePort)
})

sever.listen(3000, function(){
    console.log('服務器啟動成功, http://127.0.0.1:3000 ')
})