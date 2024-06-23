// Background script example
chrome.runtime.onInstalled.addListener(function() {
    console.log("Extension installed");
    
  });
  
// Optional: Set up a listener to receive messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'logURL') {
        console.log('Visited URL:', message.url);
    }
});  