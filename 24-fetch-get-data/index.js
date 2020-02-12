async function getData() {
  // 获取 response
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // 获取结果 JSON
  const posts = await response.json();

  // 打印结果
  console.log(posts);

  // 获取 root element
  const root = document.querySelector("#root");

  // 创建 ul
  const ul = document.createElement("ul");

  // 对于每篇文章，创建一个 li，再在里边创建一个 a，然后把结果追加到 ul 里
  posts.forEach(post => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.appendChild(document.createTextNode(post.title));
    anchor.setAttribute(
      "href",
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );

    li.appendChild(anchor);

    ul.appendChild(li);
  });
  // 把 root 追加到 ul 里
  root.appendChild(ul);
}

// 调用函数
getData();
