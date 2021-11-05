// 遍历出主页的代码
var info="";//总的弄好的样式数据
// 以后添加东西的数据
var data=[
	[
		{title:'景点展示'},
		{url:'web/poster gallery/index.html',title:'画廊效果展示'},
	],
	[
		{title:'部分网站'},
		{url:'',title:'哔哩哔哩 (゜-゜)つロ 干杯'},
	],
];

for(let i=0;i<data.length;i++){
	var items=data[i];
	var str="";
	for(let j=0;j<items.length;j++){
		var itemson=items[j];
		if(j==0){
			str+='<li><h1><a href="javascript:;" title="'+itemson.title+'">'+itemson.title+'</a></h1><dl class="str-dl">';
		}else{
			str+='<dd><a href="'+itemson.url+'" target="_blank" title="'+itemson.title+'">'+itemson.title+'</a></dd>'
		}
		if(j==items.length-1){
			str+='</dl></li>'
		}
	}
	info+=str;
}
var ol=document.getElementById('ol');
ol.innerHTML=info;
// 遍历主页结束
// 显示/隐藏每一条
var h1=document.getElementsByTagName('h1');
var dl=document.getElementsByTagName('dl');
var open=false;
var temp=-1;
for(let i=0;i<h1.length;i++){//找出每个标签头并给个index
	h1[i].index=i;
	h1[i].onclick=function(){
		for(let i=0;i<h1.length;i++){
			dl[i].style.display="none";
		}
		if(temp==this.index&&open){//同一地方点击两次显示隐藏
			dl[this.index].style.display="none";
			open=false
		}else{
			dl[this.index].style.display="block";
			open=true;
		}
		temp=this.index;
	}
}
// 显示/隐藏每一条结束

window.onload=function(){
var imgs =["images/head0.jpg", "images/head1.jpg", "images/head2.jpg","images/head3.jpg","images/head4.jpg","images/head5.jpg","images/head6.jpg","images/head7.jpg","images/head8.jpg"];    //（设定想要显示的图片）
var i = 0;
var head=document.getElementById("head");//获取DIV对象

head.style.background="url(images/head0.jpg)";   //设置图片的初始图片为该路径的图片
        function time(){
               i++;   
               i=i%9;         // 超过2则取余数，保证循环在0、1、2之间
               head.style.background="url("+imgs[i]+")"; 
               
        }
        setInterval(time,3000);//循环调用time1()函数，时间间隔为2000ms
        //setInterval()函数，按照指定的周期（按毫秒计）来调用函数或表达式	


}

function $(ElementId){
	return document.getElementById(ElementId);
	}
function check(){
   var user=$("user").value;	
   var userId=$("userId");	
   userId.innerHTML="";
   var userReg=/^\w{4,12}$/;
   if(userReg.test(user)==false)
   {
   	userId.innerHTML="用户名有误，请重新输入 ！";
   	return false;
   }
   var pwd=$("pwd").value;	
   var pwdId=$("pwdId");	
   pwdId.innerHTML="";
   var pwdReg=/^\S{6,12}$/;
   if(pwdReg.test(pwd)==false){
	 pwdId.innerHTML="密码输入有误，请重新输入";
	 return false;
	}
return true;
	}
