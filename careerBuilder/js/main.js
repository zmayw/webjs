
function init(){
	var userInfoBtn=document.getElementById("submit");
	var coverDiv=document.getElementById("cover");
	var userInfoDiv=document.getElementById("userInfo");
	userInfoBtn.onclick=function(){
		userInfoDiv.style.display="none";
		coverDiv.style.display="none";
	}
}