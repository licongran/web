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
	
   var repwd=$("repwd").value;	
   var repwdId=$("repwdId");	
   repwdId.innerHTML="";
   if(pwd!=repwd){
	    repwdId.innerHTML="两次输入的密码不一致";
	 return false;
	  }   
   
	var sexId=$("sexId");
	sexId.innerHTML="";
	var j=0;
var sex=document.getElementsByName("sex");	
for(var i=0;i<sex.length;i++){
	if(sex[i].checked==true){
		j=1;
		break;
		}
	}
if(j==0){
	sexId.innerHTML="请选择性别";
	return false;
	}

	var mail=$("email").value;
	var emailId=$("emailId");
	emailId.innerHTML="";
	var mailReg=/^\w+@\w+\.(com)$|(cn)$/;
	if(mailReg.test(mail)==false){//检测Email
		emailId.innerHTML="电子邮件地址输入有误";
		return false;
		}
	
return true;
	}