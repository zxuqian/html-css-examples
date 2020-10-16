const tabContainer = document.querySelector(".tabs");
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content > *");

// tab 点击事件
tabContainer.addEventListener("click", ({ target: currentTab }) => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  currentTab.classList.add("active");
  changeTab(currentTab.id);
});

// 处理选项卡内容切换
const changeTab = (tabId) => {
  const newTab = document.querySelector(`div[data-tab=${tabId}]`);
  tabContents.forEach((content) => {
    content.style.display = "none";
  });
  newTab.style.display = "block";
};
