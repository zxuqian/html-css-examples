//后退按钮
const prev = document.querySelector("#prev");
//前进按钮
const next = document.querySelector("#next");

// 所有幻灯片
const slides = document.querySelectorAll(".slide");

// 当前正在播放的幻灯片
var currentIndex = 0;

// 是否自动播放
var autoPlay = true;

// 播放方向，前进或后退
var forward = false;

// 自动播放间隔，5秒
var interval = 5000;

// 添加前进按钮事件处理函数
next.addEventListener("click", handleNextClicked);

// 添加后退按钮事件处理函数
prev.addEventListener("click", handlePrevClicked);

// 是否自动播放
if (autoPlay) {
  setInterval(forward ? handleNextClicked : handlePrevClicked, interval);
}

function handleNextClicked() {
  //当前幻灯片
  let current = slides[currentIndex];
  // 去掉当前幻灯片的current属性
  current.classList.remove("current");

  //移动到下一张幻灯片，如果没有，则从第一张开始
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  // 给下一张幻灯片加上current class
  slides[currentIndex].classList.add("current");
}

function handlePrevClicked() {
  //当前幻灯片
  let current = slides[currentIndex];
  // 去掉当前幻灯片的current属性
  current.classList.remove("current");

  //移动到上一张幻灯片，如果没有，则从最后一张开始
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  // 给下一张幻灯片加上current class
  slides[currentIndex].classList.add("current");
}
