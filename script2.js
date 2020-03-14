var li=document.getElementsByTagName("li")[0];
li.addEventListener("click",function(){
	li.classList.toggle="hover";
	li.innerHTML="Leading Template Brand";
});
li.addEventListener("mouseout",function(){
	li.classList.toggle="hover";
	li.innerHTML="<img src=\'logo.png\' height=\'50px\' width=\'100px\'>";
});

