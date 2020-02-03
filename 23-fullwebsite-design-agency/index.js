// 导航实例
const headerEl = document.querySelector("header");

window.addEventListener("scroll", () => {
  // 固定导航
  let height = headerEl.getBoundingClientRect().height;

  if (window.pageYOffset - height > 100) {
    if (!headerEl.classList.contains("sticky")) {
      headerEl.classList.add("sticky");
      // anime({
      //   targets: headerEl,
      //   height: [0, height],
      //   easing: "easeInOutQuad",
      //   duration: 1200
      // });
    }
  } else {
    headerEl.classList.remove("sticky");
  }
});

// 初始化幻灯片
const glide = new Glide(".glide");
// 幻灯片部分
const captions = document.querySelectorAll(".slide-caption");
glide.on(["mount.after", "run.after"], () => {
  const caption = captions[glide.index];
  anime({
    targets: caption.children,
    opacity: [0, 1],
    duration: 400,
    easing: "linear",
    delay: anime.stagger(400, { start: 300 }),
    translateY: [anime.stagger([40, 10]), 0]
  });
});
glide.on("run.before", () => {
  document.querySelectorAll(".slide-caption > *").forEach(el => {
    el.style.opacity = 0;
  });
});
glide.mount();

// 成功案例
// 初始化
const isotope = new Isotope(".cases", {
  layoutMode: "fitRows",
  itemSelector: ".case-item"
  // percentPosition: true
});

// 成功案例筛选
const filterBtns = document.querySelector(".filter-btns");
filterBtns.addEventListener("click", e => {
  let { target = {} } = e;
  const filterOption = target.getAttribute("data-filter");
  if (filterOption) {
    // 取消其他按钮active状态
    document
      .querySelectorAll(".filter-btn.active")
      .forEach(btn => btn.classList.remove("active"));
    target.classList.add("active");
    isotope.arrange({ filter: filterOption });
  }
});

/**********  动画  *********** */

// scroll reveal
const staggeringOption = {
  delay: 300,
  distance: "50px",
  duration: 500,
  easing: "ease-in-out",
  origin: "bottom"
};

ScrollReveal().reveal(".feature", { ...staggeringOption, interval: 350 });
ScrollReveal().reveal(".service-item", { ...staggeringOption, interval: 350 });

// 数据部分
ScrollReveal().reveal(".data-section", {
  beforeReveal: () => {
    anime({
      targets: ".data-piece .num",
      innerHTML: el => {
        return [0, el.innerHTML];
      },
      duration: 2000,
      round: 1,
      easing: "easeInExpo"
    });
  }
});

// 数据部分实例
const dataSectionEl = document.querySelector(".data-section");
window.addEventListener("scroll", backgroundParallax);

/**
 * 视差滚动背景
 * @param {HTMLElement} el
 */
function backgroundParallax() {
  const bottom = dataSectionEl.getBoundingClientRect().bottom;
  const top = dataSectionEl.getBoundingClientRect().top;
  if (bottom >= 0 && top <= window.innerHeight) {
    dataSectionEl.style.backgroundPosition = `center calc(50% - ${bottom /
      5}px)`;
  }
}
