// 获取显示文字的span元素
const textEl = document.querySelector("#text");
// 获取并解析要展示的文本数组
const texts = JSON.parse(textEl.getAttribute("data-text"));

// 当前显示文本数组中的第几个
let index = 0;
// 当前显示第几个字
let charIndex = 0;
// 每个字显示间隔默认是500毫秒
let delta = 500;

// 记录动画执行开始时间
let start = null;
// 是否为删除动画
let isDeleting = false;

// 动画回调函数
function type(time) {
  window.requestAnimationFrame(type);
  // 初始化开始时间
  if (!start) start = time;
  // 获取时间间隔
  let progress = time - start;
  // 每隔一定的时间，打印出一个新的字符
  if (progress > delta) {
    // 获取完整的字符
    let text = texts[index];
    // 如果是打字效果
    if (!isDeleting) {
      // 给展示文字的span新增一个字符，使用innerHTML来替换，charIndex自增1，然后返回新的字符串子串
      textEl.innerHTML = text.slice(0, ++charIndex);
      // 每个字符打印出来的速度不一样，模仿人工打字的速度
      delta = 500 - Math.random() * 400;
    } else {
      // 如果是删除效果，则把文字一个一个减掉
      textEl.innerHTML = text.slice(0, charIndex--);
    }
    // 把star更新为当前时间，进行下一个周期
    start = time;

    // 如果文字已经全部打印完毕
    if (charIndex === text.length) {
      // 下次开始删除文字
      isDeleting = true;
      // 删除文字的间隔为200毫秒
      delta = 200;
      // 额外等待1.2秒后再删除
      start = time + 1200;
    }

    // 如果文字删除完毕
    if (charIndex < 0) {
      isDeleting = false;
      // 额外增加200毫秒延迟
      start = time + 200;
      // 把index移动到下一个文本，并且在文本数组元素个数中循环
      index = ++index % texts.length;
    }
  }
}

window.requestAnimationFrame(type);
