var url = require('url')

var obj = url.parse('/pinglun?name=test&message=testMsg')

console.log(obj)

var obj2 = url.parse('/pinglun?name=test&message=testMsg', true)

console.log(obj2)