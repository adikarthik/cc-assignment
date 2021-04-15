
var attempt = 3; 

function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if ( username == "Adikarthik" && password == "2020mt13263"){
		alert ("Login Successfully");
		window.location = "success.html"; 
		return false;
	}
	else{
		attempt --;
		alert("Login failed due to incorrect username and password");
		alert("You have "+attempt+" attempts left;");
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}
