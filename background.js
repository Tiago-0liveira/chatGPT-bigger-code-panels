chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
		chrome.scripting.insertCSS({
			target: {tabId},
			files: ["chatGPT.css"],
		})
	}
})


