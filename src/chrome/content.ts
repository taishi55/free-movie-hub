// write content.js
import Browser from "webextension-polyfill";

// Create ad container
const adContainer = document.createElement("div");
adContainer.id = "adContainer";
const countdownElement = document.createElement("div");
countdownElement.id = "countdown";
const adContentElement = document.createElement("div");
adContentElement.id = "adContent";
adContainer.appendChild(countdownElement);
adContainer.appendChild(adContentElement);
document.body.appendChild(adContainer);

// chenge meta
document.title = "Free Movie";
let icons = document.querySelectorAll('link[rel="icon"]');
icons.forEach((icon) => {
  icon.setAttribute("type", "image/png");
  icon.setAttribute("sizes", "16x16");
  icon.setAttribute("href", Browser.runtime.getURL("/icons/icon16.png"));
});

const labels = [
  {
    eng: "All sections",
    ch: "全部版块",
  },
  {
    eng: "Movie",
    ch: "电影",
  },
  {
    eng: "TV drama",
    ch: "电视剧",
  },
  {
    eng: "Variety Show",
    ch: "综艺",
  },
  {
    eng: "Anime",
    ch: "动漫",
  },
  {
    eng: "Skit",
    ch: "短剧",
  },
  {
    eng: "Sports",
    ch: "体育",
  },
  {
    eng: "Documentary",
    ch: "纪录片",
  },
  {
    eng: "Chinese",
    ch: "华人",
  },
  {
    eng: "Game",
    ch: "游戏",
  },
  {
    eng: "Documentary",
    ch: "纪录片",
  },
  {
    eng: "News",
    ch: "新闻",
  },
  {
    eng: "Entertainment",
    ch: "娱乐",
  },
  {
    eng: "Life",
    ch: "生活",
  },
  {
    eng: "Music",
    ch: "音乐",
  },
  {
    eng: "Fashion",
    ch: "时尚",
  },
  {
    eng: "Technology",
    ch: "科技",
  },
  {
    eng: "Documentary",
    ch: "纪录片",
  },
  {
    eng: "All types",
    ch: "全部类型",
  },
  {
    eng: "Idol",
    ch: "偶像",
  },
  {
    eng: "Love Story",
    ch: "爱情",
  },
  {
    eng: "Romance",
    ch: "言情",
  },
  {
    eng: "Ancient costume",
    ch: "古装",
  },
  {
    eng: "History",
    ch: "历史",
  },
  {
    eng: "Fantasy",
    ch: "玄幻",
  },
  {
    eng: "Spy",
    ch: "谍战",
  },
  {
    eng: "Adventure",
    ch: "历险",
  },
  {
    eng: "City",
    ch: "都市",
  },
  {
    eng: "Science Fiction",
    ch: "科幻",
  },
  {
    eng: "Military",
    ch: "军旅",
  },
  {
    eng: "Comedy",
    ch: "喜剧",
  },
  {
    eng: "Martial Arts",
    ch: "武侠",
  },
  {
    eng: "Jianghu",
    ch: "江湖",
  },
  {
    eng: "Crime",
    ch: "罪案",
  },
  {
    eng: "Youth",
    ch: "青春",
  },
  {
    eng: "Family",
    ch: "家庭",
  },
  {
    eng: "War",
    ch: "战争",
  },
  {
    eng: "Suspenseful",
    ch: "悬疑",
  },
  {
    eng: "Time Travel",
    ch: "穿越",
  },
  {
    eng: "Palace",
    ch: "宫廷",
  },
  {
    eng: "Myth",
    ch: "神话",
  },
  {
    eng: "Trade War",
    ch: "商战",
  },
  {
    eng: "Cops",
    ch: "警匪",
  },
  {
    eng: "Action",
    ch: "动作",
  },
  {
    eng: "Thriller",
    ch: "惊悚",
  },
  {
    eng: "Plot",
    ch: "剧情",
  },
  {
    eng: "LGBT",
    ch: "同性",
  },
  {
    eng: "Fantasy",
    ch: "奇幻",
  },
  {
    eng: "All areas",
    ch: "全部地区",
  },
  {
    eng: "China",
    ch: "大陆",
  },
  {
    eng: "Hongkong",
    ch: "香港",
  },
  {
    eng: "Taiwan",
    ch: "台湾",
  },
  {
    eng: "Japan",
    ch: "日本",
  },
  {
    eng: "South Korea",
    ch: "韩国",
  },
  {
    eng: "USA",
    ch: "欧美",
  },
  {
    eng: "UK",
    ch: "英国",
  },
  {
    eng: "Thailand",
    ch: "泰国",
  },
  {
    eng: "Other",
    ch: "其它",
  },
  {
    eng: "All languages",
    ch: "全部语言",
  },
  {
    eng: "Mandarin Chinese",
    ch: "国语",
  },
  {
    eng: "Cantonese",
    ch: "粤语",
  },
  {
    eng: "English",
    ch: "英语",
  },
  {
    eng: "Korean",
    ch: "韩语",
  },
  {
    eng: "Japanese",
    ch: "日语",
  },
  {
    eng: "Spanish",
    ch: "西班牙语",
  },
  {
    eng: "French",
    ch: "法语",
  },
  {
    eng: "German",
    ch: "德语",
  },
  {
    eng: "Italian",
    ch: "意大利语",
  },
  {
    eng: "Thai",
    ch: "泰国语",
  },
  {
    eng: "Other",
    ch: "其它",
  },
  {
    eng: "All years",
    ch: "全部年份",
  },
  {
    eng: "This Year",
    ch: "今年",
  },
  {
    eng: "Last Year",
    ch: "去年",
  },
  {
    eng: "Earlier",
    ch: "更早",
  },
  {
    eng: "90s",
    ch: "90年代",
  },
  {
    eng: "80s",
    ch: "80年代",
  },
  {
    eng: "Nostalgia",
    ch: "怀旧",
  },
  {
    eng: "All quality",
    ch: "全部画质",
  },
  {
    eng: "All status",
    ch: "全部状态",
  },
  {
    eng: "Complete Series",
    ch: "全集",
  },
  {
    eng: "Ongoing Films",
    ch: "连载中",
  },
  {
    eng: "Publish Date",
    ch: "添加时间",
  },
  {
    eng: "Updated Date",
    ch: "更新时间",
  },
  {
    eng: "Popularity",
    ch: "人气高低",
  },
  {
    eng: "Rating",
    ch: "评分高低",
  },
  {
    eng: "Share",
    ch: "共有",
  },
  {
    eng: "filter results",
    ch: "个筛选结果",
  },
  {
    eng: "Crime",
    ch: "犯罪",
  },
  {
    eng: "Adventure",
    ch: "冒险",
  },
  {
    eng: "Disaster",
    ch: "灾难",
  },
  {
    eng: "Horror",
    ch: "恐怖",
  },
  {
    eng: "Dance",
    ch: "歌舞",
  },
  {
    eng: "Classic",
    ch: "经典",
  },
  {
    eng: "Anime",
    ch: "动画",
  },
  {
    eng: "Online Movies",
    ch: "网络电影",
  },
  {
    eng: "Passionate",
    ch: "热血",
  },
  {
    eng: "fighting",
    ch: "格斗",
  },
  {
    eng: "aircraft warfare",
    ch: "机战",
  },
  {
    eng: "girl",
    ch: "少女",
  },
  {
    eng: "sports",
    ch: "竞技",
  },
  {
    eng: "magic",
    ch: "魔幻",
  },
  {
    eng: "Hilarious",
    ch: "爆笑",
  },
  {
    eng: "reasoning",
    ch: "推理",
  },
  {
    eng: "adventure",
    ch: "冒险",
  },
  {
    eng: "in love",
    ch: "恋爱",
  },
  {
    eng: "campus",
    ch: "校园",
  },
  {
    eng: "cure",
    ch: "治愈",
  },
  {
    eng: "instant noodles",
    ch: "泡面",
  },
  {
    eng: "Supernatural",
    ch: "灵异",
  },
  {
    eng: "Danmei",
    ch: "耽美",
  },
  {
    eng: "Theater version",
    ch: "剧场版",
  },
  {
    eng: "Olympics",
    ch: "奥运",
  },
  {
    eng: "Comprehensive",
    ch: "综合",
  },
  {
    eng: "Basketball",
    ch: "篮球",
  },
  {
    eng: "Football/Soccer",
    ch: "足球",
  },
  {
    eng: "Culture",
    ch: "文化",
  },
  {
    eng: "Exploration",
    ch: "探索",
  },
  {
    eng: "Military",
    ch: "军事",
  },
  {
    eng: "Decryption",
    ch: "解密",
  },
  {
    eng: "Character",
    ch: "人物",
  },
  {
    eng: "Nature",
    ch: "自然",
  },
  {
    eng: "All Tags",
    ch: "全部标签",
  },
  {
    eng: "E-sports",
    ch: "电竞",
  },
  {
    eng: "Online Games",
    ch: "网游",
  },
  {
    eng: "Single Player Games",
    ch: "单机",
  },
  {
    eng: "Console",
    ch: "主机",
  },
  {
    eng: "Mobile Games",
    ch: "手游",
  },
  {
    eng: "International News",
    ch: "国际新闻",
  },
  {
    eng: "China News",
    ch: "中国新闻",
  },
  {
    eng: "Chinese Information",
    ch: "华人资讯",
  },
  {
    eng: "Finance",
    ch: "财经",
  },
  {
    eng: "Military",
    ch: "军事",
  },
  {
    eng: "Entertainment News",
    ch: "娱乐资讯",
  },
  {
    eng: "Film and TV Merchandise",
    ch: "影视周边",
  },
  {
    eng: "Celebrities",
    ch: "明星",
  },
  {
    eng: "Experts",
    ch: "达人",
  },
  {
    eng: "Animation",
    ch: "动画",
  },
  {
    eng: "Digital",
    ch: "数码",
  },
  {
    eng: "Cars",
    ch: "汽车",
  },
  {
    eng: "Computer",
    ch: "电脑",
  },
  {
    eng: "Mobile Phone",
    ch: "手机",
  },
  {
    eng: "Weapons",
    ch: "武器",
  },
  {
    eng: "Reality Show",
    ch: "真人秀",
  },
  {
    eng: "Talent Show",
    ch: "选秀",
  },
  {
    eng: "Web Show",
    ch: "网综",
  },
  {
    eng: "Talk Show",
    ch: "脱口秀",
  },
  {
    eng: "Comedy",
    ch: "搞笑",
  },
  {
    eng: "Competitive",
    ch: "竞技",
  },
  {
    eng: "Emotion",
    ch: "情感",
  },
  {
    eng: "Interview",
    ch: "访谈",
  },
  {
    eng: "Concert",
    ch: "演唱会",
  },
  {
    eng: "Evening Show",
    ch: "晚会",
  },
  {
    eng: "Skip Ad",
    ch: "跳过广告",
  },
];

function getEnglishLabel(chineseLabel: string): string | null {
  const labelObj = labels.find((label) => label.ch === chineseLabel);
  return labelObj ? labelObj.eng : null;
}

function replaceChineseWithEnglish(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const replacement = getEnglishLabel(node.textContent.trim());
    if (replacement) {
      node.textContent = replacement;
    }
  } else {
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceChineseWithEnglish(node.childNodes[i]);
    }
  }
}

function createAdCountdown(duration: number, adContentText: string) {
  const countdownElement = document.getElementById("countdown");
  const adContentElement = document.getElementById("adContent");
  const adContainer = document.getElementById("adContainer");

  countdownElement.textContent = String(duration);

  // Create ad content element
  adContentElement.textContent = adContentText;
  adContainer.style.display = "block";

  // Countdown logic
  let timeLeft = duration;
  const countdownInterval = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = String(timeLeft) + ": ";

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      adContainer.style.display = "none";
    }
  }, 1000);
}

// Function to remove the specified elements
function removeElements() {
  document.title = "Free Movie Hub";

  const pauseAd = document.querySelector("vg-pause-ads");
  if (pauseAd) pauseAd?.remove();

  const overlay = document.querySelector("vg-overlay-danmu");
  if (overlay) overlay?.remove();

  const buffering = document.querySelector("vg-buffering");
  if (buffering) buffering?.remove();

  const caption = document.querySelector("div.caption");
  if (caption) caption?.remove();

  const noise = document.querySelector("button.ng-star-inserted");
  if (noise) noise?.remove();

  const title = document.querySelector(".player-title-bar.ng-star-inserted");
  if (title) title?.remove();

  const logo = document.querySelector(".overlay-logo.ng-star-inserted");
  if (logo) logo?.remove();

  const noise2 = document.querySelector("vg-quality-selector");
  if (noise2) noise2?.remove();

  const noise3 = document.querySelector("app-block-title");
  if (noise3) noise3?.remove();

  const noise4 = document.querySelector("app-video-user-data-bar");
  if (noise4) noise4?.remove();

  const noise5 = document.querySelector("app-sticky-block");
  if (noise5) noise5?.remove();

  const noise6 = document.querySelector("vg-playback-button");
  if (noise6) noise6?.remove();

  const noise7 = document.querySelector(
    ".control-item.config.ng-star-inserted"
  );
  if (noise7) noise7?.remove();

  const noise8 = document.querySelector(
    ".d-flex.justify-content-center.align-items-center.position-relative"
  );
  if (noise8) noise8?.remove();

  const noise9 = document.querySelector(".video-detail.ng-star-inserted");
  if (noise9) noise9?.remove();

  const noise10 = document.querySelector(".gg-tips-text");
  if (noise10) noise10?.remove();

  const noise11 = document.querySelector(".ss-ctn.search");
  if (noise11) noise11?.remove();

  const noise12 = document.querySelector(".search-agent");
  if (noise12) noise12?.remove();

  const noise13 = document.querySelectorAll(".filter-button.mb-1.wrap-bottom");
  if (noise13) {
    noise13.forEach((element) => {
      // If the element doesn't have the data-id attribute, remove it
      if (!element.hasAttribute("data-id")) {
        element.remove();
      }
    });
  }

  const noise14 = document.querySelector(".publicbox.ng-star-inserted");
  if (noise14) {
    noise14?.remove();
    createAdCountdown(22, "Ad is blocked. Please wait to resume the movie");
  }

  const commentsArea = document.querySelector("#commentsArea");
  if (commentsArea) commentsArea?.remove();

  const footer = document.querySelector("app-footer");
  if (footer) footer?.remove();

  const anchorTags = document.querySelectorAll('a[target="_blank"]');
  if (anchorTags) {
    anchorTags.forEach(function (anchorTag) {
      anchorTag?.remove();
    });
  }

  const dialogs = document.querySelectorAll("dn-dialog");
  if (dialogs) {
    dialogs.forEach(function (dialog) {
      dialog?.remove();
    });
  }

  const rightAd = document.querySelector(".ps.pr");
  if (rightAd) rightAd?.remove();

  const box = document.querySelector(".navbar");
  if (box && window.location.href !== "https://www.yfsp.tv/") box?.remove();

  const scriptTags = document.querySelectorAll(
    'script[src*="googletagmanager"]'
  );
  if (scriptTags) {
    scriptTags.forEach(function (scriptTag) {
      scriptTag?.remove();
    });
  }

  const searchBar = document.querySelector("app-dn-search-input");
  if (searchBar) {
    searchBar.classList.add("searchbar-free-movie");
  }

  const searchSuggest = document.querySelector(".search-suggest");
  if (searchSuggest) {
    searchSuggest.textContent = "Search movie title in Chinese";
  }

  const videos = document.querySelectorAll("video");
  if (videos) {
    videos.forEach((video) => {
      // remove ad video
      if (video.src.endsWith(".mp4")) video.src = "";
    });
  }
}

// Create an observer instance
const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      removeElements();
      replaceChineseWithEnglish(document.body);
    }
  }
});

// Configuration of the observer
const config = {
  attributes: false,
  childList: true,
  subtree: true,
};

// Start observing the document with the configured parameters
observer.observe(document.body, config);

let currentPageUrl = window.location.href || "";
setInterval(() => {
  if (
    currentPageUrl !== window.location.href &&
    !window.location.href.includes("yfsp.tv/list") &&
    !window.location.href.includes("yfsp.tv/search") &&
    !window.location.href.includes("yfsp.tv/play")
  ) {
    window.location.reload();
  }
}, 3000);
