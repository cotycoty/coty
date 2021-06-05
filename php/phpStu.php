<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>


// 1.变量声明<br/><br/>
<?php
$x=5;
$a=array("a",6,"d");
?>
// 2.print echo print_r var_dump<br/><br/>
<?php
echo "Hello",$x,"<br/>";//只有echo才能加","这么用
echo("Hello<br/>");
echo print "Hello<br/>","<br/>";//print有返回值,成功显示返回1
print("Hello<br/>");
echo "a:$a[0]<br/>";
echo "a:{$a[1]}<br/>";
print_r($a);echo "<br/>";//print_r能打印数组
var_dump($a);echo "<br/>";//var_dump还输出类型和长度
var_dump($x);echo "<br/>";
?>

// 3.作用域<br/><br/>
 // 全局变量,局部变量<br/>


// 4.函数<br/><br/>
<?php
function myTest()
{
    $y=10; 
	echo "<p>x=$x</p>";// 函数内无法直接调用全局变量
	global $x;
    echo "<p>x=$x</p>";// 需要使用global关键字或用$GLOBALS['x'] 数组访问
	
} 
myTest();
echo "<p>y=$y</p>";//函数外无法访问局部变量
?>
// 5.关键字global,static<br/><br/>


// 6.界定符EOF<br/><br/>
<?php
echo <<<EOF
		"x=$x"
		x=$x
        <p>EOF</p>
EOF;
?>
// 结束需要独立一行且前后不能空格<br/>


// 7.类型<br/><br/>
<?php
var_dump(-345); // 负数
echo "<br>"; 
var_dump(0x8C);// 十六进制数
echo "<br>";
var_dump(047); // 八进制数
echo "<br>";
var_dump(2.3); 
echo "<br>";
var_dump(2.3e3); 
echo "<br>";
var_dump(2E-3); 
echo "<br>";
var_dump(True); 
echo "<br>";
var_dump(array("a","b")); 
echo "<br>";
var_dump(null); 
echo "<br>";
class c
{
	var $c;
	function __construct($c="color"){
		$this->c=$c;
	}
	function p(){
		echo c;
	}
}
$c1=new c("class");
var_dump($c1);
echo "<br>";
?>

// 8.比较==,===<br/><br/>
<?php
var_dump(23=="23");
echo "<br>";
var_dump(23==="23");
echo "<br>";
?>
<pre>
常用数据类型比较
// 0 == false: bool(true)
// 0 === false: bool(false)

// 0 == null: bool(true)
// 0 === null: bool(false)

// false == null: bool(true)
// false === null: bool(false)

// "0" == false: bool(true)
// "0" === false: bool(false)

// "0" == null: bool(false)
// "0" === null: bool(false)

// "" == false: bool(true)
// "" === false: bool(false)

// "" == null: bool(true)
// "" === null: bool(false)
</pre>


// 9.常量
<?php
define("name","value",true);
//$case_insensitive=false默认false大小写敏感,常量是全局变量
echo "<br/>";
var_dump("name");
echo "<br/>";
var_dump(name);
echo "<br/>";
?>


// 10.字符串
<?php
$t="he";
$xt="llo";
echo "<br/>";
echo $t.$xt.$t.$xt,$xt;//并置
echo "<br/>";
echo strlen($xt);
echo "<br/>";
echo strpos($t.$xt.$t.$xt,$xt);
?>


//11.运算符
<?php
// "!==="绝对不等于
// " ? : "三元运算符
// "%"取模
// "intdiv"取整
// "<=>"组合比较符
echo "<br/>";
echo 2<=>3,3<=>2,2<=>2;
echo "<br/>";
?>


// 12.条件语句 循环语句
 // 和java一样
 

// 13.数组
<?php
$arr=array("a",2,"c");
$arra=array("a"=>1,"b"=>2);


?>
</body>
</html>
