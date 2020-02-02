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
    delay: anime.stagger(400, { start: 500 }),
    translateY: [anime.stagger([40, 0]), 0]
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

// 数据部分
anime({
  targets: ".data-piece .num",
  innerHTML: el => {
    return [0, el.innerHTML];
  },
  duration: 2000,
  round: 1,
  easing: "easeInExpo"
});
