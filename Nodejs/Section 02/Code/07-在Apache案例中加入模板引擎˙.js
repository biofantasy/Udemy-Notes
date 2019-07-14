var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

var wwwDir = 'YourDirectoyPath'

server.on('request', function(req, res){

    var url = req.url

    fs.readFile('./template-apache.html', function (error, data) {
        if(error){
            return res.end('404 Not Found')
        }

        fs.readdir(wwwDir, function (err, files) {
            if(err){
                return res.end('Can Not find www dir.')
            }
            
            // 這裡只需要使用模板引擎解析替換data中的模板字串就可以了
            // 數據就是files
            // 然後去的 template.html 文件中編寫模板語法即可
            // 要判斷是文件還是資料夾可以找API來使用
            template.render(data.toString(), {
                title: '目錄',
                files: files
            })
            
            res.end(data)
        })
    })
    
})


server.listen(3000, function(){
    console.log('Sever is running... http://127.0.0.1:3000 ')
})