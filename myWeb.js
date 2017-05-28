var express = require("express");
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

//songs

//设置/路由
myweb.get('/',function(req,res){
	res.render('index');
});

//设置个人主页的路由
myweb.get('/personPage',function(req,res){
	res.render('personPage');
});

//设置照片墙的路由
myweb.get('/picwall',function(req,res){
	res.render('picWall');
});


//设置关于我的路由路线
myweb.get('/aboutme',function(req,res){
	res.render('aboutme');
});

//定制关于网站的路由路线
myweb.get('/aboutsite',function(req,res){
	res.render('aboutsite');
});

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
 