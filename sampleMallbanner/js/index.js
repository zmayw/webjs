

//全局变量
var index=0,
	timer=null,
	pics=(document.getElementById("banner-box")).getElementsByTagName("div"),
	len=pics.length,
	dots=(document.getElementById("dots")).getElementsByTagName("span")
	next=document.getElementById("next"),
	prev=document.getElementById("prev"),
	menu=document.getElementById("main-menu-content"),
	subMenu=document.getElementById("sub-menu"),
	innerBoxes=subMenu.getElementsByClassName("inner-box"),
	menuItems=menu.getElementsByClassName("menu-item");

function slideImg(){
	var main=document.getElementById("main");
	//鼠标滑过清除定时器，离开继续
	main.onmouseover=function(){
		//滑过清除定时器
		if(timer) clearInterval(timer);
	}

	main.onmouseout=function(){
		timer = setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			//切换图片
			changeImg();
		},3000);
	}

	//自动在main上触发鼠标离开的事件
	main.onmouseout();

	//点击圆点，切换图片
	for(j=0;j<len;j++){
		dots[j].id=j;
		dots[j].onclick=function(){
			index=this.id;
			changeImg();
		}
	}

	//点击下一张
	next.onclick=function(){
		index++;
		if(index>=len){
			index=0;
		}
		changeImg();
	}

	//点击上一张
	prev.onclick=function(){
		index--;
		if(index<0){
			index=(len-1);
		}
		changeImg();
	}

	//子菜单操作
	for(m=0;m<menuItems.length;m++){
		menuItems[m].setAttribute("data-index",m);
		menuItems[m].onmouseover=function(){
			var idx=this.getAttribute("data-index");
			for(n=0;n<innerBoxes.length;n++){
				innerBoxes[n].style.display="none";
				menuItems[n].style.background="none";
			}
			this.style.background="rgba(0,0,0,0.1)";
			subMenu.style.display="block";
			innerBoxes[idx].style.display="block";
		}
	}

	menu.onmouseout=function(){
		subMenu.style.display="none";
	}

	subMenu.onmouseover=function(){
		this.style.display="block";
	}

	subMenu.onmouseout=function(){
		this.style.display="none";
	}

}



//切换图片
function changeImg(){
	//遍历所有div，属性为隐藏
	for(i=0;i<len;i++){
		if(i!=index){
			pics[i].style.display="none";
			dots[i].className="";
		}else{
			pics[i].style.display="block";
			dots[i].className="active";
		}
	}
	
}


slideImg();