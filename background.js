chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && tab.url.startsWith("https://chat.openai.com")) {
		chrome.scripting.insertCSS({
			target: {tabId},
			files: ["chatGPT.css"],
		})
	}
})


