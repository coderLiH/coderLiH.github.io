var koa = require('koa');
var router = require('koa-router')();// koa路由
var proxy = require('koa-proxy');// 代理 可以重定向访问base路径，即访问本地时可以像访问重定向url一样
var staticServer = require('koa-static');
var path = require('path');

var app = koa();

var apiProxy = proxy({host: 'http://tstest.zlapi.com'});

router.get('/helloworld', function *(next){
    this.body = 'hello world';
})
.get('/users', function *(next){
    this.body = '<a href="http://www.baidu.com">百度</a>';
})
.get('/toy/*',apiProxy);

// 与普通的 function 不同，generator functions 以 function* 声明。以这种关键词声明的函数支持 yield

app.use(router.routes());

app.use(staticServer(path.join(__dirname,'')));

app.listen(8787, '0.0.0.0', function () {
	console.log('app listen success');
});

// 上面基本等价于
// var http = require('http');
// http.createServer(app.callback()).listen(8888);