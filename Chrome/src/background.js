chrome.webRequest.onCompleted.addListener((rqst) => {
	chrome.tabs.query({active: true, lastFocusedWindow: true }).then(tablist => {if(tablist.length == 1){console.log(tablist[0].id)}});
}, {urls: ["https://*/*.webp"]});