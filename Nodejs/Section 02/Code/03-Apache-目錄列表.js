var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = 'YourDirectoyPath'

server.on('request', function(req, res){

    var url = req.url

    fs.readFile('./template.html', function (error, data) {
        if(error){
            return res.end('404 Not Found')
        }
        // 1. 如何得到 wwwDir 目錄列表中的文件名和目錄名
        //      fs.readdir
        // 2. 如何將得到的文件名和目錄名替換到 template.html 中
        //      2.1 在template 留下替換標記 html字串取代
        //      2.2 模板引擎

        // 在 EcmaScript6 的字符串中, 可以使用 ${} 來引用變量
        fs.readdir(wwwDir, function (err, files) {
            if(err){
                return res.end('Can Not find www dir.')
            }
            
            //2.1
            var content = ''
            files.forEach(function (item) {
                content += `
                <tr>
                <td data-value="img/">
                <a class="icon dir" href="YourDirectoyPath">${item}/</a>
                </td>
                <td class="detailsColumn" data-value="0"></td>
                </tr>
                `
            })

            data = data.toString()
            data = data.replace('^_^', content)
            res.end(data)
        })
    })
    
})


server.listen(3000, function(){
    console.log('Sever is running... http://127.0.0.1:3000 ')
})