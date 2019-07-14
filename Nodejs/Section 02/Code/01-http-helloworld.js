var http = require('http')

var server = http.createServer()

server.on('request', function(req, res){

    var url = req.url

    if(url === '/'){
        res.end('Hello World')
    }else{
        res.end('404 Not Found')
    }
})


server.listen(3000, function(){
    console.log('Sever is running... http://127.0.0.1:3000 ')
})