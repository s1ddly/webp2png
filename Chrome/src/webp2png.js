//console.log("triggered");
//procurl = "http://localhost:50505/2.webp";
function reget(procurl){
	var http = new XMLHttpRequest();
	var holder = "";
	http.open("get", procurl);
	http.overrideMimeType('text/plain; charset=x-user-defined');
	http.onreadystatechange = function() {
		if(http.readyState == 4){
			if (typeof http.responseBody=='undefined') {
				var response = http.responseText.split('').map(function(e){return String.fromCharCode(e.charCodeAt(0) & 0xff)}).join('');
			} else {
				var response = convertResponseBodyToText(http.responseBody);
			}
			holder = response;
			gencanv(holder);
		} 
	}
	http.send(null);
	return holder;
}

function gencanv (intext, outimgid){
	var WebPImage = { width:{value:0},height:{value:0} }
	var decoder = new WebPDecoder();
	data=convertBinaryToArray(intext);
	var config = decoder.WebPDecoderConfig;
	var output_buffer = config.output;
	var bitstream = config.input;
	var StatusCode = decoder.VP8StatusCode;
	status = decoder.WebPGetFeatures(data, data.length, bitstream);
	var mode = decoder.WEBP_CSP_MODE;
	output_buffer.colorspace = 4;
	status = decoder.WebPDecode(data, data.length, config);
	var bitmap = output_buffer.u.RGBA.rgba;
	console.log(bitmap);
	var canvas = document.createElement("canvas");
	var biHeight=output_buffer.height; var biWidth=output_buffer.width;
	canvas.height=biHeight;
	canvas.width=biWidth;
	var context = canvas.getContext('2d');
	var output = context.createImageData(canvas.width, canvas.height);
	var outputData = output.data;
	
	for (var h=0;h<biHeight;h++) {			
		for (var w=0;w<biWidth;w++) {
			outputData[0+w*4+(biWidth*4)*h] = bitmap[1+w*4+(biWidth*4)*h];
			outputData[1+w*4+(biWidth*4)*h] = bitmap[2+w*4+(biWidth*4)*h];
			outputData[2+w*4+(biWidth*4)*h] = bitmap[3+w*4+(biWidth*4)*h];
			outputData[3+w*4+(biWidth*4)*h] = bitmap[0+w*4+(biWidth*4)*h];
		};			
	}
	context.putImageData(output, 0, 0);
	//console.log(canvas.toDataURL('image/png'));
	document.getElementById(outimgid).src = canvas.toDataURL('image/png')
	canvas.remove()
}

//var img = document.getElementById("canv1").toDataURL('image/png');
//document.getElementById("tstpng").src = img;
imglist = document.getElementsByTagName("img");
for (var i = 0; i < imglist.length; i ++){
	//console.log(imglist[i].src.substr(imglist[i].src.length - 5).toLowerCase());
	if(imglist[i].src.substr(imglist[i].src.length - 5).toLowerCase() == ".webp"){
		console.log(imglist[i].src);
		
	}
}