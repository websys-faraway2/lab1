// GLOBALs
var counter = 0;
var RANGE = 5;
var LENGTH = news.rss.channel.item.length
var TITLES = [];
var ARTHORS = [];
var TIMES = [];
var LINKS = [];
var CONTNET = [];

for (let index = 0; index < LENGTH; index++) {
	TITLES.push(news.rss.channel.item[index].title);
	ARTHORS.push(news.rss.channel.item[index]["dc:creator"]);
	TIMES.push(news.rss.channel.item[index].pubDate);
	LINKS.push(news.rss.channel.item[index].link);
	CONTNET.push(news.rss.channel.item[index].description)
}

function start() {
	if (sessionStorage.getItem("counter")) {
		counter = sessionStorage.getItem("counter");
	}
	document.getElementById("start").hidden = true;
	document.getElementById("main").hidden = false;

	out1 = document.getElementById("output1");
		out1.innerText = TITLES[counter+4];
		out2 = document.getElementById("output2");
		out2.innerText = TITLES[counter+3];
		out3 = document.getElementById("output3");
		out3.innerText = TITLES[counter+2];
		out4 = document.getElementById("output4");
		out4.innerText = TITLES[counter+1];
		out5 = document.getElementById("output5");
		out5.innerText = TITLES[counter];
		
		ar = document.getElementById("arthor");
		ar.innerText = ARTHORS[counter];
		tm = document.getElementById("pubdate");
		tm.innerText = TIMES[counter];
		cont = document.getElementById("content");
		cont.innerHTML = CONTNET[counter];
	
		lk = document.getElementById("link");
		lk.href = LINKS[counter];
	
		counter++;
		sessionStorage.setItem("counter", counter);
	window.setInterval(() => {
		out1 = document.getElementById("output1");
		out1.innerText = TITLES[counter+4];
		out2 = document.getElementById("output2");
		out2.innerText = TITLES[counter+3];
		out3 = document.getElementById("output3");
		out3.innerText = TITLES[counter+2];
		out4 = document.getElementById("output4");
		out4.innerText = TITLES[counter+1];
		out5 = document.getElementById("output5");
		out5.innerText = TITLES[counter];
		
		ar = document.getElementById("arthor");
		ar.innerText = ARTHORS[counter];
		tm = document.getElementById("pubdate");
		tm.innerText = TIMES[counter];
		cont = document.getElementById("content");
		cont.innerHTML = CONTNET[counter];
	
		lk = document.getElementById("link");
		lk.href = LINKS[counter];
	
		counter++;
		sessionStorage.setItem("counter", counter);
	}, 5000);
}

/////////////////////////////////////////////////////////////////////////////////////
// DUMP CODE                                                                      //
/////////////////////////////////////////////////////////////////////////////////////

// function pause() {
// 	window.clearInterval();
// }

// function display(){
// 	events();
// 	window.setInterval(events, 3000);
// }

// function events(){
// 		var num = []
// 		//Every news saves in item
// 		var len = news.rss.channel.item.length;

// 		//Generates 5 different random numbers
// 		while (num.length != 5){
// 			var i=Math.floor(Math.random()*len);
// 			num.push(i);
// 			if (num.length != 0){
// 				for (var b=0;b<num.length-1;b++){
// 					if (num[b] == i)
// 						num.pop();
// 				}
// 			}
// 		}

// 	    out1 = document.getElementById("output1");
// 	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[0])].link + "\">" + news.rss.channel.item[(num[0])].title + "</a>";
// 	    out1 = document.getElementById("output2");
// 	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[1])].link + "\">" + news.rss.channel.item[(num[1])].title + "</a>";
// 	   	out1 = document.getElementById("output3");
// 	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[2])].link + "\">" + news.rss.channel.item[(num[2])].title + "</a>";
// 	    out1 = document.getElementById("output4");
// 	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[3])].link + "\">" + news.rss.channel.item[(num[3])].title + "</a>";
// 	    out1 = document.getElementById("output5");
// 	    out1.innerHTML = "<a href=\"" + news.rss.channel.item[(num[4])].link + "\">" + news.rss.channel.item[(num[4])].title + "</a>";

// }