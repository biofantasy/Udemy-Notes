var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = 'YourDirectoyPath'

server.on('request', function(req, res){

    var url = req.url

    var filePath = '/index.html'
    if(url !== '/'){
        filePath = url
    }

    fs.readFile(wwwDir + filePath, function (error, data) {
        // return 有兩個作用 
        // 1. 方法返回值
        // 2. 阻止代碼繼續向後執行
        if(error){
            return res.end('404 Not Found')
        }
        res.end(data)
    })
    
})


server.listen(3000, function(){
    console.log('Sever is running... http://127.0.0.1:3000 ')
})