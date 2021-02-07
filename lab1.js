
function display(){
		window.setInterval(events, 3000);
}

function events(){
		var num = []
		var len = news.menuItem.length;
		while (num.length != 5){
			var i=Math.floor(Math.random()*len);
			num.push(i);
			if (num.length != 0){
				for (var b=0;b<num.length-1;b++){
					if (num[b] == i)
						num.pop();
				}
			}
		}

	    out1 = document.getElementById("output1");
	    out1.innerHTML = news.menuItem[(num[0])].menuName + ', ' + news.menuItem[(num[0])].menuURL;
	    out1 = document.getElementById("output2");
	    out1.innerHTML = news.menuItem[(num[1])].menuName + ', ' + news.menuItem[(num[1])].menuURL;
	   	out1 = document.getElementById("output3");
	    out1.innerHTML = news.menuItem[(num[2])].menuName + ', ' + news.menuItem[(num[2])].menuURL;
	    out1 = document.getElementById("output4");
	    out1.innerHTML = news.menuItem[(num[3])].menuName + ', ' + news.menuItem[(num[3])].menuURL;
	    out1 = document.getElementById("output5");
	    out1.innerHTML = news.menuItem[(num[4])].menuName + ', ' + news.menuItem[(num[4])].menuURL;

}

