var express = require("express");
var route = require('./route');
var url = require('url');
var path = require("path");
var fs = require("fs");
var myweb = express();
var port = process.env.PORT || 3000;


//设置静态资源
myweb.use(express.static(__dirname + '/public'));

// 设置 handlebars 视图引擎 
var handlebars = require('express3-handlebars').create(); 
myweb.engine('handlebars', handlebars.engine); 
myweb.set('view engine', 'handlebars');
myweb.set('views','./public/views');           //设置视图根目录

myweb.listen(port,function(){
	console.log("myweb living on port:" + port);
});


//所有的路由处理都放置在路由处理函数中进行,只需要传递一个项目app的值进去直接进行设置就行了
route(myweb);

//定制 404 页面 
myweb.use(function(req, res){          
	res.type('text/plain');         
	res.status(404);         
	res.send('404 - Not Found'); 
}); 
 
// 定制 500 页面 
myweb.use(function(err, req, res, next){          
	console.error(err.stack);         
	res.type('text/plain');         
	res.status(500);         
	res.send('500 - Server Error'); 
});
 