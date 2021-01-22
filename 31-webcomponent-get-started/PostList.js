const template = document.createElement("template");
template.innerHTML = `
  <style>
    div {
      width: 375px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 48px;
    }

    article {
      font-family: Verdana;
      font-size: 14px;
      line-height: 22px;
      color: hsl(0deg, 0%, 40%);
    }
  </style>
  <div></div>
`;

class PostList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }

  async connectedCallback() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    this.initPosts(posts);
  }

  initPosts(posts) {
    const div = this.shadowRoot.querySelector("div");
    posts.forEach((post) => {
      const blogPostEle = div.appendChild(document.createElement("blog-post"));

      // 博客标题
      blogPostEle.setAttribute("title", post.title);

      // 博客文章
      const article = blogPostEle.appendChild(
        document.createElement("article")
      );
      article.slot = "content";
      article.innerHTML = post.body;
    });
  }
}

customElements.define("post-list", PostList);
