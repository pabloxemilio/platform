
// 获取配置域名前缀
const getConfUrl = () => {
  const CONFIG_HOST = [
    "https://fdsghuk349dfsbjk.ccapi218orbjksapm03fjkds.com/res/kbp/test/",//测试
    "https://api-php-res-bucket-ap-south-1.s3.ap-south-1.amazonaws.com/pro/platform/kbp_config/",
    "https://fdsghuk349dfsbjk.ccapi218orbjksapm03fjkds.com/res/kbp/prerelease/",//预发布
  ]
  const prerelease = getUrlParams("prerelease");
  if (prerelease && prerelease == "true") {//预发布
    return CONFIG_HOST[2];
  }
  const index = window.IS_DEBUG_BUILD ? 0 : 1;
  return CONFIG_HOST[index];
}
//解密返回的数据
const decrypt = (text) => {
  let convertBuffer
  for (let i = 0; i < text.length; i++) {
    const unicode = text.charCodeAt(i) + i % 5;
    const addStr = String.fromCharCode(unicode)
    if (!convertBuffer) {
      convertBuffer = addStr
    } else {
      convertBuffer += addStr
    }
  }
  return JSON.parse(convertBuffer);
}

const renderBgImage = ({ imgUrl, isOpen }, host) => {
  let mainEl = document.querySelector(".kbp-loading");
  mainEl.style.display = 'block'
  let imageSrc = `${host}homepage/img/${imgUrl}`
  isOpen == 1 ? localStorage.setItem('loadingBgSrc', imageSrc) : localStorage.removeItem('loadingBgSrc')
  mainEl.style.backgroundImage = isOpen == 1 ? `url(${imageSrc})` : ''
}

const getConfigParams = async () => {
  try {
    const host = getConfUrl()
    const data = await fetch(`${host}homepage/conf.json?timestamp=${Date.now()}`)
    let text = await data.text()
    const res = decrypt(text)
    renderBgImage(res, host)
  } catch (error) {
  }
}
const langConfig = {
  'en-US': 'Loading, please wait...',
  'hi-IN': 'लोडिंग...',
  'pt-BR': 'Carregando aguarde...',
}
// 创建 loading-node 元素
const loadingNode = document.createElement("div");
loadingNode.id = "loading-node";
// 需要渲染新的loading页面参数
const newPageIds = ["203", "205", "206", "207"];
const isNewPage = newPageIds.includes(getUrlParams("gameID"));
const langKey = getUrlParams('lang')
// 判断url的参数
function getUrlParams(key) {
  try {
    const params = new URLSearchParams(location.search);
    return params.get(key) || "";
  } catch (error) {
    return "";
  }
}
//渲染默认老的也loading页面
function renderDefaultPage() {
  // 设置 loading-node
  Object.assign(loadingNode.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "9999",
    background: "#000",
  });

  // 创建 loading-box 元素
  const loadingBox = document.createElement("div");
  loadingBox.className = "loading-box";
  Object.assign(loadingBox.style, {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
  });

  // 创建 loading 图片
  const loadingImg = document.createElement("img");
  loadingImg.src = "./loading.png";
  loadingImg.alt = "loading";
  Object.assign(loadingImg.style, {
    width: "100%",
  });

  // 创建 progress-bar-box 元素
  const progressBarBox = document.createElement("div");
  progressBarBox.id = "progress-bar-box";

  // 设置 progress-bar-box 的样式
  Object.assign(progressBarBox.style, {
    position: "absolute",
    bottom: "-30%",
    left: "0",
    width: "98%",
    borderRadius: "12px",
    height: "6px",
    border: "1px solid #434343",
    borderTop: "1.5px solid #434343",
    borderLeft: "2px solid #434343",
    borderRight: "2px solid #434343",
    backgroundColor: "#464646",
  });

  // 创建进度条文本
  const progressText = document.createElement("span");
  // progressText.innerText = "70%";
  Object.assign(progressText.style, {
    fontSize: "18px",
    color: "#fff",
    textAlign: "center",
    lineHeight: "4",
  });

  // 创建 bar-bg 元素
  const barBg = document.createElement("div");
  barBg.className = "bar-bg";
  Object.assign(barBg.style, {
    boxSizing: "border-box",
    width: "100%",
    height: "4px",
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    borderRadius: "6px",
    background: "url(./img_jindutiaolan.png) no-repeat",
    backgroundSize: "100% 100%",
  });

  // 创建 bar 元素
  const bar = document.createElement("div");
  bar.className = "bar";
  Object.assign(bar.style, {
    boxSizing: "border-box",
    width: "0%",
    height: "4px",
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    borderRadius: "6px",
    background: "url(./img_jindutiao.png) no-repeat",
    backgroundSize: "100% 100%",
  });

  // 将元素添加到 DOM 中
  progressBarBox.appendChild(progressText);
  progressBarBox.appendChild(barBg);
  progressBarBox.appendChild(bar);
  loadingBox.appendChild(loadingImg);
  loadingBox.appendChild(progressBarBox);
  loadingNode.appendChild(loadingBox);
  document.body.appendChild(loadingNode);
}
//渲染新的页面
const preloadImage = async (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    if (img.complete) {
      resolve(true)
    } else {
      img.onload = () => resolve(true)
      img.onerror = (err) => {
        localStorage.removeItem('loadingBgSrc')
        resolve(false)
      }
    }
  })
}

//渲染新的页面 
async function renderNewPage() {
  let newElement = document.querySelector(".kbp-loading");
  let storageImg = localStorage.getItem("loadingBgSrc");
  if (newElement) {
    // const kbpLoadingLogo = document.querySelector('.kbpLoading-logo');
    // document.querySelector('.loadingText').innerHTML = langConfig[langKey] || langConfig['en-US'];
    // // const naturalWidth = kbpLoadingLogo ? kbpLoadingLogo.naturalWidth : 500;
    // const referer = getUrlParams('referer') ?? 'kb';
    // //全球站 32%
    // kbpLoadingLogo.style.width = referer == "come" ? '32%' : '40%';
    newElement.style.display = "block";
    // if (storageImg && await preloadImage(storageImg)) {
    //   newElement.style.backgroundImage = `url(${storageImg})`
    // }
  }
}

if (isNewPage) {
  renderNewPage();
  // getConfigParams()
} else {
  renderDefaultPage();
}
// 通过配置获取背景图
let progressSpan =
  document.querySelector("#progress-bar-box span") ||
  document.querySelector(".kbp-Progress-text .percent");
let progressBar =
  document.querySelector("#progress-bar-box .bar") ||
  document.querySelector(".kbp-loading-progress-inner");

const getDurationTime = (min = 3000, max = 5000) => Math.round(Math.random() * (max - min)) + min
let progress = 0 //进度条的初始长度
let singleProgress = Math.round(getDurationTime() / 50 / 90) //循环单词进度条的长度
let timer = null

// 页面加载完成后开始假的进度条更新
window.onload = () => startProgress()
// 更新进度条

const updateProgress = () => {
  if (!isNewPage) {
    progressSpan.innerHTML = progress >= 90 ? `${progress}%` : `${progress}.${Math.ceil(Math.random() * 9)}%`;
    progressBar.style.width = `${progress}%`
  }
}

const startProgress = () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (progress >= 99) {
      clearTimeout(timer)
      return
    }
    // 小于90的时候继续累加,*100为了处理小数累加精度丢失问题
    if (progress >= 90) {
      progress = (progress * 100 + 0.1 * 100) / 100
    } else {
      progress += singleProgress
    }
    updateProgress()
    startProgress()
  }, progress < 90 ? getDurationTime(33, 50) : getDurationTime(800, 1000))
}

window.addEventListener("engine_init_progress", (e) => {
  let detail = e.detail || {};
  let realProgress = Number(detail.progress) || 0
  // 如果实际的进度大于假的，用实际进度条，否则用假的
  progress = realProgress >= progress ? realProgress : progress
  updateProgress()
});








