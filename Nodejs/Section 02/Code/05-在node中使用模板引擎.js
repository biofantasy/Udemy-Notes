// art-template
// art-template 不僅可以在瀏覽器用, 也可以在 node 中使用

// 安裝 :
//  https://aui.github.io/art-template/zh-cn/docs/installation.html
//  npm install art-template
//  會默認下載到 node_modules 目錄中

// 在 Node 中使用 art-template 模板引擎
// 模板引擎最早起始於服務器領域, 後來才發展到了前端

// 1. 安裝 npm install art-template
// 2. 在需要使用的文件模塊中加載 art-template
//    只需要使用 require 方法加載就可以了
//    參數中的 art-template 就是你下載的包的名字
//    也就是說你 install 的名字是什麼, 你 require 中的就是什麼
// 3. 查文檔, 使用模板引擎API

var template = require('art-template')

var fs = require('fs')

fs.readFile('./tpl.html',function (err, data) {
    if(err){
        return console.log('Read file error')
    }

    //template.render('模板字符串','替換對象')
    var ret = template.render(data.toString() ,{
        name: 'Jack',
        age: 18,
        country: 'Taiwan',
        hobbies: [
            'Code',
            'Sing',
            'Game'
        ]
    })

    console.log(ret)
})



