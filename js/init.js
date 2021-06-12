/**
这是一个用于初始化网页的js,全站的网页都会引入
此js包括内容如下:
	1.复制读取配置文件的函数getVar(...)所在的js:varFactory.js
		(1.这是一个为了取得配置文件custmize.json中的变量而建立的js
		(2.引入它后可获取全局变量
			dirname:当前html的文件夹(网址)名称
			filename:当前html的文件名
			currentDomain:域名
			custmize:custmize.json的string数据
			json:custmize.json文件的JSON对象
		(3.推荐使用函数
		getVar(k1,k2,k3,...);用于获取custmize.json中对应的值,k1:第一个key,以此类推k2:第二个key;
	2.复制了一个创建script标签的函数addScript(path)所在的js:addScript.js
	3.写了引入css的函数addCss
	4.实例了html,head,body对象,htmlEle,bodyEle,headEle
	
	5.引入xml转html的js文件xml2html.js
	6.引入标准的网站head内容包括
		网站标题
		标签图标
		
		
**/
function $(symbol){
	return document.querySelector(symbol);
}
// addScript.js***********************************
function addScript(path){
	var ele=document.createElement("script");
	ele.setAttribute("type","text/javascript");
	ele.setAttribute("src",path);
	document.body.appendChild(ele);
}
// ******************************************************************


// varFactory.js**********************************************************
// 获取当前文件名
var  filename=location.href;
filename=filename.substr(filename.lastIndexOf('/')+1);
// 获取当前文件夹
var dirname=location.href.substring(0,location.href.lastIndexOf('/'));
//获取当前域名
var currentDomain=window.location.protocol+"//"+window.location.host;
function getText(){
	var url = currentDomain+"/setting/custmize.json";
	if(window.XMLHttpRequest){
		var request=new XMLHttpRequest();
	}else{
		var request=new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.overrideMimeType("application/json");
	request.open("get", url,false);
	request.send();
	return request.responseText;
}
var custmizeText=getText();
var json = JSON.parse(custmizeText);
function getVar(){
	// 获取json数据
	jn=json;
	for(i of arguments){
		jn=jn[i];
	}
	return jn;
}
// ******************************************************************

// addCss**********************************************************
var htmlEle=document.getElementsByTagName("html")[0];
var headEle=document.getElementsByTagName("head")[0];
var bodyEle=document.getElementsByTagName("body")[0];
function addCss(path){
	headEle.innerHTML+='<link type="text/css"  rel="stylesheet" href="'+path+'"/>';
}
// ****************************************************************


// 初始化
// head内容添加
headEle.innerHTML+=
'<title>'+getVar("title","homepage")+'</title>'+//title
'<link rel="icon" href='+currentDomain+getVar("title","icon")+' type="image/x-icon"/>';//标签页图标
bodyEle.innerHTML+='<div class="topnav">'+
		'<a class="active" href="#home">主页</a>'+
		'<a href="#about">关于</a>'+
		'<a href="#contact">联系我们</a>'+
		'<input type="text" placeholder="搜索..">'+
	'</div>';
addCss(currentDomain+getVar("path","topBar.css"));
