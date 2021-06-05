//解析器
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
//解析
xmlhttp.open("GET","../xml/note.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

//修改
document.getElementById("to").innerHTML=
xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
document.getElementById("from").innerHTML=
xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
document.getElementById("message").innerHTML=
xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;


//字符串读取
// txt="<note>";
// txt=txt+"<to>Tove</to>";
// txt=txt+"<from>Jani</from>";
// txt=txt+"<heading>Reminder</heading>";
// txt=txt+"<body>Don't forget me this weekend!</body>";
// txt=txt+"</note>";

// if (window.DOMParser)
// {
// parser=new DOMParser();
// xmlDoc=parser.parseFromString(txt,"text/xml");
// }
// else // Internet Explorer
// {
// xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
// xmlDoc.async=false;
// xmlDoc.loadXML(txt);
// }

// document.getElementById("to").innerHTML=
// xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
// document.getElementById("from").innerHTML=
// xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
// document.getElementById("message").innerHTML=
// xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
