chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({color:'orange'},function(){
        console.log("This is an orange color")
    })

   chrome.browserAction.setBadgeText({text: 'ON'});
   chrome.browserAction.setBadgeBackgroundColor({color: 'orange'});
    
   var rule1={ 
    conditions: [new chrome.declarativeContent.PageStateMatcher({
    pageUrl: {hostEquals: 'developer.chrome.com'},
    })],
    actions: [new chrome.declarativeContent.ShowPageAction()]
    }

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
    chrome.declarativeContent.onPageChanged.addRules([rule1]);
    })

})