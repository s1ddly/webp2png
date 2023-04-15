
chrome.webRequest.onCompleted.addListener((rqst) => {
	alert("yeet");
},
{urls: ["<all_urls>"]}
);