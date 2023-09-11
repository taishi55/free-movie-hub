// write background.js
import Browser from "webextension-polyfill";

Browser.action.onClicked.addListener(async(tab) => {
    await Browser.tabs.create({ url: Browser.runtime.getURL("index.html") });
});
