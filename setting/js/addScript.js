function addScript(path){
	var ele=document.createElement("script");
	ele.setAttribute("type","text/javascript");
	ele.setAttribute("src",path);
	document.body.appendChild(ele);
}