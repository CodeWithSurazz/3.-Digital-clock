//FOR DARK MODE JAVASCRIPT 
 var darkModeBtn = document.querySelector(".darkMode")
 var bbs = document.querySelector(".bbs")
 var body = document.querySelector("body")
 var clock = document.querySelector(".clock")
  var time = document.querySelector("#time")
 var clickTime = 0

 darkModeBtn.addEventListener("click", function(){
 	      	if(clickTime == 0){
 	      		darkModeBtn.innerHTML = "Dark"
 	      		darkModeBtn.style.backgroundColor = "black"
 	      		darkModeBtn.style.color = "white"
 	      	 darkModeBtn.style.boxShadow = "-2px 2px 10px 0px rgba(255,255,255,0.2)";
 	      	 
 	      		bbs.innerHTML = "DS"
 	      		bbs.style.backgroundColor = "black"
 	      		bbs.style.color = "white"
 	      		bbs.style.boxShadow = "-2px 2px 10px 0px rgba(255,255,255,0.2)";
 	    
 	      		body.style.backgroundColor = "black"
 	      		clock.style.backgroundColor = "black"
 	      		time.style.color = "white"
 	      		clock.style.boxShadow = "-2px 2px 10px 0px rgba(255,255,255,0.2)";
 	      		clickTime = 1
 	      	}else{
 	      		darkModeBtn.innerHTML = "Light"
 	      		darkModeBtn.style.backgroundColor = "white"
 	      		darkModeBtn.style.color = "black"
 	      		darkModeBtn.style.boxShadow = "-2px 2px 10px 0px rgba(0,0,0,0.2)";
 	      		
 	      		bbs.innerHTML = "Mukhtar"
 	      		bbs.style.backgroundColor = "white"
 	      		bbs.style.color = "black"
 	      		bbs.style.boxShadow = "-2px 2px 10px 0px rgba(0,0,0,0.2)";
 	      		
 	      		body.style.backgroundColor = "white"
 	      		clock.style.backgroundColor = "white"
 	      		time.style.color = "black"
 	      		clock.style.boxShadow = "-2px 2px 10px 0px rgba(0,0,0,0.2)";
 	      		clickTime = 0
 	      	}
  })
 
  
  
  