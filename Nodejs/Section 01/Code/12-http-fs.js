// 1. 結合 fs 發送文件中的數據
// 2. ContentType 
//      https://reurl.cc/aWrm4
//      不同的資源對應的Content-Type是不同的
//      圖片不需指定編碼
//      一般只為字符數據才指定編碼

var http = require('http')
var fs = require('fs')

var server = http.createServer();



server.on('request', function(req, res){
    console.log('收到客戶端的請求路徑為:', req.socket.remoteAddress, req.socket.remotePort)

    var url = req.url

    if(url === '/')
    {
        //發送文件中的內容
        fs.readFile('./resource/index.html', function(error, data){
            if(error)
            {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件讀取失敗')
            }
            else
            {
                // data 默認是二進位制數據, 可以通過 . toString 轉為字符串
                // res.end() 支持兩種數據類型, 一種是二進位制, 一種是字符串
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }


        })
    }
    //url: 統一資源定位符
    //url -> resource 
    else if(url === '/pic')
    {
        //發送文件中的內容
        fs.readFile('./resource/ip-port.png', function(error, data){
            if(error)
            {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件讀取失敗')
            }
            else
            {
                // 圖片不需要指定編碼, 一般常說的編碼指的是字符編碼
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }


        })
    }
})

server.listen(5000, function(){
    console.log('Sever is runnung... http://127.0.0.1:5000 ')
})