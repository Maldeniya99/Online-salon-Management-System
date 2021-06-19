function validate()
{
	
var un,pw

un=document.getElementById("email").value;
pw=document.getElementById("password").vlue;

if(un.length==0){
	alert("empty email");
}else if(pw.length==0){
	
	alert("empty password");
	
	}else{
		
		alert("Success");
		
	}

}