chrome.webRequest.onCompleted.addListener((rqst) => {
	chrome.tabs.query({active: true, lastFocusedWindow: true }).then(
		tablist => {
			if(tablist.length == 1){
				chrome.scripting.executeScript(
					{
						target: {tabId: tablist[0].id},
						files: ["src/webp2png.js"]
					}
				)
			}
		}
	);
}, {urls: ["https://*/*.webp"]});