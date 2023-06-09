chrome.webRequest.onBeforeRequest.addListener((rqst) => {
	chrome.tabs.query({active: true, lastFocusedWindow: true }).then(
		tablist => {
			if(tablist.length == 1){
				//DEBUG
				//console.log(rqst.url);
				//END OF DEBUG
				chrome.scripting.executeScript(
					{
						target: {tabId: tablist[0].id, allFrames : true},
						files: ["src/webp2png.js"]
					}
				)
			}
		}
	);
}, {urls: ["https://*/*.webp", "http://*/*.webp"], types: ["image"]});