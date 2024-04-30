document.body.setAttribute("data-theme", "light"); //按钮状态默认为白天
const BUTTON = document.querySelector(".components");
const TOGGLE = () => {
  const willChangeMode =
    document.body.getAttribute("data-theme") === "dark" ? "light" : "dark"; // 判断是否白天黑夜;
  document.body.setAttribute("data-theme", willChangeMode);
};
BUTTON.addEventListener("click", TOGGLE);