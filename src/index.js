const uis = [
  {
    href: "56-animation-button",
    text: "按钮 Hover 五彩阴影特效",
    newItem: true,
  },
  {
    href: "55-beautiful-table",
    text: "表格样式",
  },
  {
    href: "54-navbar-dark-bouncing",
    text: "导航条带有跳跃动画",
  },
  {
    href: "53-screenshot-html2-canvas",
    text: "前端截图功能实现",
  },
  {
    href: "52-day-night-toggle-button",
    text: "白天黑夜切换按钮",
  },
  {
    href: "51-css-scroll-based-animation",
    text: "CSS Scroll Based Animation",
  },
  {
    href: "50-css-grid-irregular-layout",
    text: "CSS Irregular Layout",
  },
  {
    href: "49-html-buit-in-dialog",
    text: "HTML Built-in Dialog",
  },
  {
    href: "48-css-clay-morphism",
    text: "CSS Claymorphism",
  },
  {
    href: "47-css-custom-scrollbar",
    text: "CSS 自定义滚动条样式",
  },
  {
    href: "46-css-aspect-ratio",
    text: "CSS 设置宽高比",
  },
  {
    href: "45-URLSearchParams",
    text: "URLSearchParams 使用简介",
  },
  {
    href: "44-css-pointer-events",
    text: "CSS 事件穿透",
  },
  {
    href: "43-css-gradient-shadow",
    text: "CSS 渐变阴影",
  },
  {
    href: "42-clipboard-api",
    text: "剪贴板 API 操作",
  },
  {
    href: "41-css-scroll-snap",
    text: "CSS 滚动贴合",
  },
  {
    href: "40-multi-column-layout",
    text: "Multi-column 布局",
  },
  {
    href: "39-web-animations",
    text: "Web Animations API",
  },
  {
    href: "38-horizontal-scrolling",
    text: "横向滚动",
  },
  {
    href: "37-container-queries",
    text: "CSS Container Queries",
  },
  {
    href: "36-tech-website",
    text: "HTML&CSS 工业风网站",
  },
  {
    href: "35-collision-physics",
    text: "JS 碰撞物理引擎",
  },
  {
    href: "34-drag-drop-api",
    text: "原生拖拽与拖放操作",
  },
  {
    href: "33-text-image-layout",
    text: "图片文字环绕",
  },
  {
    href: "32-place-item-center",
    text: "2行代码居中元素",
  },
  {
    href: "31-05-wechat-emoji-effect",
    text: "仿微信8.0表情动画",
  },
  {
    href: "31-webcomponent-get-started",
    text: "Web Components 入门实战",
  },
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
  { href: "26-glassmorphism", text: "玻璃态特效" },
  { href: "27-glitch-effect", text: "赛博朋克按钮" },
  { href: "28-css-colors", text: "HSL 颜色表示法" },
  { href: "29-resizable-element", text: "可缩放元素" },
  {
    href: "30-gradient-background-animation",
    text: "渐变背景过渡动画",
  },
];

function UILists() {
  return uis.map((ui, i) => {
    return (
      <li style={{ position: "relative" }}>
        <Link item={ui} key={i} />
      </li>
    );
  });
}

function Link({ item }) {
  return (
    <a href={item.href}>
      {item.text}
      {item.newItem ? (
        <span
          style={{
            background: "hsl(121deg 100% 50%)",
            borderRadius: 4,
            fontSize: 10,
            padding: "6px 4px",
            color: "#000000",
            fontWeight: 600,
            position: "absolute",
            right: -14,
            top: -6,
          }}
        >
          （NEW!）
        </span>
      ) : null}
    </a>
  );
}
const list = document.querySelector(".list");
ReactDOM.render(<UILists />, list);
