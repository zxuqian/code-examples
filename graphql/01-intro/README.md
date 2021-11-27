# GraphQL 示例

这个项目是 Bilibili 视频：

[《 GraphQL 速览：React/Vue 的最佳搭档》](https://www.bilibili.com/video/BV1fM4y1A7U1/)

的配套代码。

## GraphQL 服务端

GraphQL 的服务端代码位于项目根目录的 `server.js` 文件中。

要运行 GraphQL 服务端，在命令中输入：

```bash
node server.js
```

之后打开 `http://localhost:4000/`，点击 `Query Your Server` 就可以测试 GraphQL 服务了。

## GraphQL 客户端

GraphQL 客户端使用了 Vite 2.0 创建的 Vue 项目，位于 `client` 目录下。

要运行客户端，在命令行中输入：

```
yarn dev
#或
npm run dev
```

之后打开 `http://localhost:3000` 来查看效果。