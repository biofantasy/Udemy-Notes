# Node.js

## 1  Node.js介紹

### 1.1 Node.js 是什麼

+ Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).
  * Node.js 不是一門語言
  * Node.js 不是lib 不是框架
  * Node.js 是一個Javascipt運行時環境(平台)
  * 簡單來說就是 : Node.js可以解析和執行Javascript代碼
  * 以前只有瀏覽器可以解析執行Javascipt
  * 也就是現在的Javascipt可以完全脫離瀏覽器來運行, 一切歸功於: Node.js
  
+ 瀏覽器中的Javascript
  * Ecma Script
   * 基本的語法
   * if
   * var
   * function
   * object
   * Array 
  * BOM
  * DOM
  
+ Node.js 中的Javascript
	* **沒有 BOM, DOM (不操作頁面)**
	* Ecma Script
	* 在Node這個Javascript執行環境中為Javascript提供了一些服務器級別的操作 API
	  * 例如文件讀寫
	  
	  * 網路服務的構建
	  
	  * 網路通信
	  
	  * http服務器 等處理...
	
+ 構建於Chrome的V8引擎之上
  * 代碼只是具有特定格式的字符串而已
  * 引擎可以認識他, 引擎可以幫你去解析和執行
  * Google Chrome的V8引擎是目前公認的解析執行Javascript代碼最快的
  * Node.js 的作者把Google Chrome中的V8引擎移植了出來, 開發的一個獨立的Javascript運行時環境

+ Node.js use an event-driven, non-blocking I/O model that makes it lightweight and efficient.
	* event-driven 事件驅動
	*  non-blocking I/O model 非阻塞IO模型 (異步) 
	* lightweight and efficient 輕量和高效
	
+ Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world .

  * npm 是世界上最大的開源庫生態系統

  * 絕大多數Javascript相關的包都存放在npm上, 這樣做的目的是為了讓開發人員更方便的去下載使用.

  * ex :  `npm install jquery`

### 1.2 Node.js 能做什麼
+ web服務器後台
+ 命令行工具
  * npm (node)
  * git (C語言)
  * hexo (node)
  * 等...
+ 對於前端開發工程師來講, 接觸node最多的是他的命令行工具
  * 自己寫的很少, 主要是使用別人開發的
  * webpack
  * gulp
  * npm
  
### 1.3  預備知識

+ HTML
+ CSS
+ Javascript
+ 簡單的命令行操作
  * cd
  * dir
  * ls
  * mkdir
  * rm
+ 具有服務端開發經驗更佳

### 1.4  預計學到

+ B/S編程模型
  * Browser - Server
  * back-end
  * 任何服務端技術這種BS編程模型都是一樣, 和語言無關
  * Node.js 只是做為學習BS編程模型的一個工具
+ 模塊化編程
  * RequireJS
  * SeaJS
  * `@import('文件路徑')`
  * 以前認知的Javascript只能通過 `script` 標籤來加載
  * 在Node 中可以像 `@import()` 一樣來引用加載 Javascript 腳本文件 
+ Node 常用 API
+ 異步編程
  * 回調函數
  * Promise
  * async
  * generator
+ Express Web 開發框架
+ Ecmascript 6
  * 只是一個新語法而已
+  ...
+ 學習 Node 不僅會幫助處理服務端, 同時能幫助學習以後的前端高級內容
  * Vue.js
  * React
  * Angular

## 2 起步

### 2.1 安裝Node環境

+ [下載 ]( https://nodejs.org/en/download/)

+ 確認是否安裝成功

  * `node -v`

+ 環境變量
### 2.2 REPL
- read

- eval

- print

- loop
  在終端輸入 `node` 命令直接Enter:

  ![1563123597516](C:\Users\biofantasy\AppData\Roaming\Typora\typora-user-images\1563123597516.png)

### 2.3 Hello World

+ 注意: 文件名不要使用 `node.js` 來命名.
+ 解析執行Javascript
+ 讀寫文件
+ http

![1563000876028](C:\Users\biofantasy\AppData\Roaming\Typora\typora-user-images\1563000876028.png)

## 3  Node 中的 JavaScript
- Ecmascript
  + 沒有 DOM, BOM
- 核心模塊
- 第三方模塊
- 用戶自定義模塊

### 3.1 核心模塊

Node 為 JavaScript 提供了很多服務器級別的 API , 這些API絕大多數都被包裝到了一個具名的核心模塊中.

例如: 文件操作的 `fs` 核心模塊, http服務構件的 `http` 模塊, `path` 路徑操作模塊, `os` 操作系統訊息模塊....



使用[核心模塊](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html), 必須宣告:

```javascript
var fs = require('fs')
var http = require('http')
```

![1563069274077](C:\Users\biofantasy\AppData\Roaming\Typora\typora-user-images\1563069274077.png)

### 3.2 第三方模塊
- require
- exports

### 3.3 用戶自定義模塊

## 4 Web 服務器開發
### 4.1 ip 地址和Port
- ip 地址用來定位計算機
- 端口號用來定位具體應用程序
- 所有需要聯網通信的應用程序都會占用一個端口號
- 端口號的範圍從 0 - 65536 之間
- 在計算機中有些默認端口號, 最好不要去使用

     + 例如 http 服務的 80

- 可以同時開啟多個服務, 但一定要確保不同服務占用的端口號不同
### 4.2 Content Type
- [Html Mime Type](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)

### 4.3 請求對象 Request

### 4.4 響應對象 Response

### 4.5 在 Node 中使用模板引擎

### 4.6 統一處理靜態資源

### 4.7 服務端渲染

+ 在服務端使用模板引擎

+ 服務端渲染和客戶端渲染的區別

  + 客户端渲染不利於 [SEO](https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96) = 搜索引擎優化

  + 服務端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的

  + 所以你会发现真正的网站既不是纯异步也不是纯服务端渲染出来的

  + 而是兩者結合來做的

  + 例如京东的商品列表就采用的是服務端渲染，目的了为了 SEO( 搜索引擎優化)

  + 而它的商品評論列表為了用户體驗，而且也不需要 SEO 優化，所以采用是客户端渲染

    + 客戶端渲染

      ![1563115461420](C:\Users\biofantasy\AppData\Roaming\Typora\typora-user-images\1563115461420.png)

    + 服務端渲染

      ![1563115542939](C:\Users\biofantasy\AppData\Roaming\Typora\typora-user-images\1563115542939.png)

      

## 額外補充

### 代碼風格
- [JavaScript Standard Style](https://standardjs.com/)

- [Airbnb JavaScript Style](https://github.com/airbnb/javascript)

### 推薦書籍

- 《编写可维护的 JavaScript》

## 5 留言板

