async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.webRequest.onCompleted.addListener((rqst) => {
	//console.log("yeet");
	intermediateTab = getCurrentTab();
	console.log(intermediateTab.id);
	if (intermediateTab.id != null){
		console.log(intermediateTab.id);
		chrome.scripting.executeScript({target: {tabId : intermediateTab.id, allFrames : true},files: ['src/webp2png.js']});
	}
},
{urls: ["<all_urls>"]}
);