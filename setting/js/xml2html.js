//获取xml源和导入位置
var xmlPath=document.querySelector(".xmlPath")
if(xmlPath==null){
	console.log("不能导入xml");
}else{
	
	//获取xml解析器
	function loadXmlDoc(xmlPath){
		if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET",xmlPath,false);
	xmlhttp.send();
	return xmlhttp.responseXML;
	}
	xmlPath=xmlPath.getAttribute("path");
	var htmlBody=document.getElementsByTagName("body")[0];
	var xmlDoc=loadXmlDoc(xmlPath);
	//使用ccode直接写html内容
	function importCcode(){
		var ccode=xmlDoc.getElementsByTagName("cdata");
		if (ccode.length>0&&ccode[0].childNodes.length>0&&ccode[0].childNodes[0].nodeValue!==null){
			for(var i of ccode){
				for(var j of i.childNodes){
					htmlBody.innerHTML+=j.nodeValue;
				}
			}
			return 1;
		}else{
			return 0;
		}
	}

	//导入规则
	var rule={
	   //xml:html
		"h1":"h1",
		"div":"div"
	};

	//导入函数
	function importDefault(rule){
		for(var i in rule){
			var xml=xmlDoc.getElementsByTagName(i);
			for(var j=0;j<xml.length;j++){
				htmlBody.appendChild(xml[j]);
			}
		}
		
	}

	if(importCcode()==0){
		importDefault(rule);
	};
}



