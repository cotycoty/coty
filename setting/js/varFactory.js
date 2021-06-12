/**
1.这是一个为了取得配置文件custmize.json中的变量而建立的js
2.引入它后可获取全局变量
	dirname:当前html的文件夹(网址)名称
	filename:当前html的文件名
	currentDomain:域名
	custmize:custmize.json的string数据
	json:custmize.json文件的JSON对象
3.推荐使用函数
	getVar(k1,k2,k3,...);用于获取custmize.json中对应的值,k1:第一个key,以此类推k2:第二个key;
**/


// alert(window.location.protocol+"//"+window.location.host); //   返回https://mp.csdn.net
// alert(window.location.host); //返回url 的主机部分，例如：mp.csdn.net  
// alert(window.location.hostname); //返回mp.csdn.net
// alert(window.location.href); //返回整个url字符串(在浏览器中就是完整的地址栏)
// alert(window.location.pathname); //返回/a/index.php或者/index.php  
// alert(window.location.protocol); //返回url 的协议部分，例如： http:，ftp:，maito:等等。  
// alert(window.location.port); //url 的端口部分，如果采用默认的80端口，那么返回值并不是默认的80而是空字符  


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


