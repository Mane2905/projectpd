var _=require('lodash');
var button=document.getElementsByTagName("button")[0];
button.addEventListener("mouseenter",function (){
	button.innerHTML="<span>Sign In</span>";
});
button.addEventListener("mouseleave",function(){
	button.innerHTML="<span>Find Out More</span>";
});
var blank=document.getElementById("blank");
button.addEventListener("click",function(){
	blank.innerHTML="<strong>loading...</strong>";
});