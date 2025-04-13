// Add an event listener for when a page finishes loading (webNavigation API)
chrome.webNavigation.onCompleted.addListener((details) => {
    // Ensure this script only runs on the main frame (not embedded iframes)
    if (details.frameId === 0) {
        // Execute the ad-blocking script (linkedin.js) on LinkedIn pages
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ['linkedin.js']
        });
    }
}, { url: [{ hostContains: "linkedin.com" }] });
