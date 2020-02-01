// 获取滑动选择器实例
const sliderEl = document.querySelector("#slider-input");
// 获取数值显示容器实例
const selectedEl = document.querySelector(".selected");

// 监听滑动事件
sliderEl.addEventListener("input", () => {
  selectedEl.innerHTML = sliderEl.value;
});
