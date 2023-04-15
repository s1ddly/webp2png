//console.log("triggered");
imglist = document.getElementsByTagName("img");
for (var i = 0; i < imglist.length; i ++){
	//console.log(imglist[i].src.substr(imglist[i].src.length - 5).toLowerCase());
	if(imglist[i].src.substr(imglist[i].src.length - 5).toLowerCase() == ".webp"){
		console.log(imglist[i].src);
	}
}