function say(){
    console.log('Hello World')
}

say()


;(function(){
    console.log('hello')
})()

;['蘋果','香蕉'].forEach(function (item) {
    console.log(item)
})

// ` 是 EcmaScript 6 中新增的一種字符串包裹方式, 叫做: 模板字符串
// 他支持換行和非常方便拼接變量
// var foo = `
// bar
// 123
// 456
// 789
// `
// console.log(foo)

;`hello`.toString()
'hello'.toString()


// 當採用無分號代碼風格時, 需要注意以下情況:
//      當一行代碼是以:
//          (
//          [
//          `
//          開頭的時候, 則在前面補上一個分號 以避免問題
//  結論: 
//      無論你得代碼是否有分號, 碰到上面三種皆以;開頭