// 获取导航菜单项
const navMenuItems = document.querySelectorAll("#nav-menu a");
// 获取指示条实例，用来做动画
const indicator = document.querySelector(".indicator");

// 点击菜单项时的事件处理函数
function handleMenuItemClick(target) {
  // 取消所有active状态和style样式，为了重新触发动画
  navMenuItems.forEach(item => {
    item.classList.remove("active");
    item.style = "";
  });
  target.classList.add("active");
  // 设置指示条为菜单项的宽度
  indicator.style.width = `${target.offsetWidth}px`;
  // 设置指示条位置为菜单项的起始位置
  indicator.style.left = `${target.offsetLeft}px`;

  // 改变section，旧的active的section移除active状态，并且淡出
  const currentSection = document.querySelector(".active-section");
  currentSection.classList.remove("active-section");

  // 获取点击的菜单项对应的分区实例，如个人简介或工作经历
  const newCurrentSection = document.querySelector(
    `.${target.getAttribute("data-rel")}`
  );
  newCurrentSection.classList.add("active-section");
}

navMenuItems.forEach(item => {
  // 每个菜单项点击时调用事件处理函数
  item.addEventListener("click", e => handleMenuItemClick(e.target));

  // 首次页面展示时，工作简介菜单是active的，先触发一次点击处理
  item.classList.contains("active") && handleMenuItemClick(item);
});
