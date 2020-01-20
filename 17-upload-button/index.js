// 获取上传按钮和进度条
var uploadButton = document.querySelector(".upload-button");
var progressBar = document.querySelector(".upload-button .progress-bar");

// 进度条完成时的宽度
let width = uploadButton.getBoundingClientRect().width;
// 假定上传时间为5s
let uploadTime = 5000;

uploadButton.addEventListener("click", () => {
  // 先移除之前的完成样式
  uploadButton.classList.remove("uploaded");

  //设置正在上传.uploading样式
  uploadButton.classList.add("uploading");

  //假设5秒后上传完成
  setTimeout(() => {
    uploadButton.classList.replace("uploading", "uploaded");
  }, uploadTime);

  let start = null;
  function grow(timestamp) {
    // 动画开始时的时间戳
    if (!start) start = timestamp;
    // 距离开始时已经过的时间戳
    let progress = timestamp - start;

    //按比例增加进度条宽度
    progressBar.style.width = `${Math.min(
      width * (progress / uploadTime),
      width
    )}px`;

    // 如果上传未完成，继续执行此函数，递归循环
    if (progress < uploadTime) {
      window.requestAnimationFrame(grow);
    }
  }

  // 开始执行grow函数
  window.requestAnimationFrame(grow);
});
