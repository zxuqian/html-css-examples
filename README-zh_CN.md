# HTML CSS 特效示例代码库

本仓库包含我发布在 [Bilibili, 峰华前端工程师](https://space.bilibili.com/302954484) 视频的配套示例代码。你可以用来寻找灵感，或者直接使用示例中的代码。

[英文版](./README.md)

在线 Demo 演示： [https://zxuqian.github.io/html-css-examples/](https://zxuqian.github.io/html-css-examples/)

仓库中的每个文件夹下即对应各个 HTML/CSS 示例的源代码，包括：

- CSS/SVG 动画
- 阴影/发光/玻璃特效
- 响应式布局
- 打字机特效
- 脸部识别
- 3D 变换
- 原生 Canvas
- 还有更多...

## 个人主页 

[博客](https://zxuqian.cn)

[点击跳转到我的 Bibibili 个人空间首页](https://space.bilibili.com/302954484)

或者扫描下方二维码

<img src="./bilibili.jpg" width="250" alt="Bilibili 峰华前端工程师" />

## 贡献

欢迎贡献新特效示例！请按照以下步骤添加：

1. Fork 仓库。
2. 创建一个新分支，以 `feature/` 开头。
3. 参考现有的示例结构创建示例（注意最新的编号）。
4. 运行 `yarn run watch` 或 `npm run watch`。它会监控 `src/index.js` 中的更改，并编译到 `/index.js`，这个文件用于生成示例页面的 React 组件。
5. 更新 `src/index.js`。在 `uis` 数组的顶部添加示例名字和链接，并把 `newItem` 设置为 `true`，移除上一个示例的 `newItem` 属性。
6. 测试并提交 PR。
7. 请确保示例的样式符合现代设计审美。

注意：你同意所贡献的代码可能会在我的一些视频中进行教学演示。