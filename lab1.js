
function display(){
	events();
	window.setInterval(events, 3000);
}

function events(){
		var num = []
		//Every news saves in item
		var len = news.rss.channel.item.length;

		//Generates 5 different random numbers
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
	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[0])].link + "\">" + news.rss.channel.item[(num[0])].title + "</a>";
	    out1 = document.getElementById("output2");
	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[1])].link + "\">" + news.rss.channel.item[(num[1])].title + "</a>";
	   	out1 = document.getElementById("output3");
	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[2])].link + "\">" + news.rss.channel.item[(num[2])].title + "</a>";
	    out1 = document.getElementById("output4");
	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[3])].link + "\">" + news.rss.channel.item[(num[3])].title + "</a>";
	    out1 = document.getElementById("output5");
	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[4])].link + "\">" + news.rss.channel.item[(num[4])].title + "</a>";

}