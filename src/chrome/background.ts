// write background.js
import Browser from "webextension-polyfill";

Browser.action.onClicked.addListener(async (tab) => {
  await Browser.tabs.create({
    url: "https://www.yfsp.tv/list?region=%E6%AC%A7%E7%BE%8E&language=%E8%8B%B1%E8%AF%AD&year=%E4%BB%8A%E5%B9%B4",
  });
});
