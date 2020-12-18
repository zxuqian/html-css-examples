const uis = [
  { href: "01-social-icon-hover-glow-effect", text: "社交图标Hover发光特效" },
  { href: "02-login-form-glass-effect", text: "登录表单玻璃特效" },
  { href: "03-chatting-ui", text: "移动聊天UI实现" },
  { href: "04-svg-text-drawing-effect", text: "文本绘制及渐变特效" },
  {
    href: "05-button-hover-border-drawing-effect",
    text: "按钮Hover边框绘制特效",
  },
  { href: "06-libra-ui-concept", text: "Libra概念UI设计实现" },
  { href: "07-3d-cubic-images", text: "3D立方体照片墙" },
  { href: "08-parallax-scrolling", text: "纯CSS页面视差滚动特效" },
  { href: "09-japanese-pronunciation", text: "CSS翻转特效制作五十音图" },
  { href: "10-navigation-bar", text: "4种不同的导航高亮指示" },
  { href: "11-canvas-bar-chart", text: "原生Canvas实现柱状图" },
  { href: "12-skill-progress-bar", text: "CSS技能进度条表现效果" },
  { href: "14-image-slider", text: "图片轮播组件" },
  { href: "15-responsive-navbar", text: "响应式全屏导航" },
  { href: "16-svg-animation-truck", text: "SVG工厂动画" },
  { href: "17-upload-button", text: "动画上传按钮" },
  { href: "18-elsa-magic-effect", text: "冰雪奇缘魔法特效" },
  { href: "19-profile-card", text: "个人资料卡页面" },
  { href: "20-typewritter-effect", text: "打字机效果" },
  { href: "21-range-slider", text: "滑动选择器美化" },
  { href: "22-face-reco-mask", text: "人脸识别戴口罩" },
  { href: "23-fullwebsite-design-agency", text: "整站-科技公司首页" },
  { href: "24-fetch-get-data", text: "使用 fetch 加载远程数据" },
  { href: "25-neumorphism-tabs", text: "新拟态选项卡" },
  { href: "26-glassmorphism", text: "玻璃态特效", newItem: true },
];

const e = React.createElement;

function UILists() {
  return uis.map((ui, i) => {
    return e("li", {}, e(Link, { item: ui }));
  });
}

function Link({ item }) {
  const New = () => e("span", { style: { color: "#74f174" } }, `（NEW!）`);
  return e("a", { href: item.href }, [item.text, item.newItem ? e(New) : null]);
}

console.log(ReactDOM);

const list = document.querySelector(".list");
ReactDOM.render(e(UILists), list);
