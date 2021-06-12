/**
这里是index.html的js文件
里面的内容有
	主页的加载等待页面
**/

// 添加加载页面的css
addCss(currentDomain+getVar("path","loading_index.css"));
addCss(currentDomain+getVar("path","font.css"));

// 等待3秒后关闭
// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
// const repeatedGreetings = async () => {
	// await sleep(2000);
	// document.getElementsByClassName("loading")[0].setAttribute("style","display:none");
// };
// repeatedGreetings();

// 等待页面加载完成1秒后关闭
window.onload=()=>setTimeout(() => document.getElementsByClassName("loading")[0].setAttribute("style","display:none"), 1000);



