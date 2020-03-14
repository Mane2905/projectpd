var button=document.getElementsByTagName("button")[0];
button.addEventListener("mouseenter",function (){
	button.innerHTML="<span>Sign In</span>";
});
button.addEventListener("mouseleave",function(){
	button.innerHTML="<span>Find Out More</span>";
});
button.addEventListener("click",function(){
	alert("Slow Network Detected");
});