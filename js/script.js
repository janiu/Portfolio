function timer()
	{
		var hour = new Date().getHours();
		if (hour<10) hour = "0"+hour;
		
		var minute = new Date().getMinutes();
		if (minute<10) minute = "0"+minute;
		
		var second = new Date().getSeconds();
		if (second<10) second = "0"+second;
		
		document.getElementById("clock").innerHTML = 
		hour+":"+minute+":"+second;
		 
		 setTimeout("timer()",1000);
	}