module.exports = route;

function route(myweb){
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


	//设置天刀武侠的路由
	myweb.get('/wuxia',function(req,res){
		res.render('wuxia');
	});

}