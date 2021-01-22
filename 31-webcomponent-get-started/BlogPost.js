const template = document.createElement("template");
template.innerHTML = `
  <style>
    div {
      display: grid;
      height: 100%;
    }

    h1 {
      font-size: 36px;
    }
    button {
      padding: 12px 48px;
      border: none;
      margin-top: 24px;
      border-radius: 4px;

      background: linear-gradient(
        90deg,
        hsl(220deg, 100%, 60%) 15%,
        hsl(160deg, 100%, 60%) 160%
      );
      box-shadow: 0px 0px 24px hsl(0deg, 0%, 0%, 0.1);
      color: white;

      align-self: end;
      justify-self: start;

      cursor: pointer;
      outline: none;
    }
  </style>
  <div>
    <h1></h1>
    <slot name="content"></slot>
    <button>查看全文</button>
  </div>
`;

class BlogPost extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );

    this.titleEle = this.shadowRoot.querySelector("h1");
    this.buttonEle = this.shadowRoot.querySelector("button");
    this.articleSlot = this.shadowRoot.querySelector("slot");
    this.showFullArticle = false;
    this.content = "";
    this.article = null;
    // 如果是在 js 中传递的 title 属性则不能在构造函数中直接获取，因为初始化时属性可能还没添加到组件中，需要监听它的变化，
    // 使用 attributeChangedCallback 生命周期方法
    // this.titleEle.textContent = this.getAttribute("title");
  }

  /**
   * 按钮点击事件，控制是否显示全文。
   */
  toggleFull() {
    this.showFullArticle = !this.showFullArticle;
    if (this.showFullArticle) {
      this.article.innerHTML = this.content;
      this.buttonEle.textContent = "隐藏全文";
    } else {
      this.article.innerHTML = this.getExcept();
      this.buttonEle.textContent = "查看全文";
    }
  }

  /**
   * 当 slot 被替换为实际的 article 元素时，保存 article 元素实例
   * 和全文内容，再把原文改成摘要形式。
   */
  slotChange() {
    const elements = this.articleSlot.assignedElements();
    const article = elements[0];
    this.article = article;
    this.content = this.article.innerHTML;
    this.article.innerHTML = this.getExcept();
  }

  getExcept() {
    return this.content.slice(0, 60) + "...";
  }

  connectedCallback() {
    this.buttonEle.addEventListener("click", this.toggleFull.bind(this));
    this.articleSlot.addEventListener("slotchange", this.slotChange.bind(this));
  }

  disconnectedCallback() {
    this.buttonEle.removeEventListener("click", this.toggleFull());
    this.articleSlot.removeEventListener("slotchange", this.slotChange);
  }

  static get observedAttributes() {
    return ["title"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "title") {
      this.titleEle.textContent = newValue;
    }
  }
}

customElements.define("blog-post", BlogPost);
