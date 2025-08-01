/*globals chrome */


function checkForValidUrl(tabId, info, tab) {
    // permissions: ["tabs"] on manifest

    const url_p = new RegExp(
        'https://photos.google.com/(u/([0-9]+)/)?(album|share)/([^/?]+)'
    );

    if(tab.url.indexOf('/photo/') > -1){
        return;
    }

    if(tab.url.match(url_p)) {
        // show the action button.
        chrome.action.enable(tabId);
    } else {
        // hide the action button for non-matching URLs
        chrome.action.disable(tabId);
    }
}

// URLをチェック
chrome.tabs.onUpdated.addListener(checkForValidUrl);
