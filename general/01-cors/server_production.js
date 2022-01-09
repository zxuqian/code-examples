const express = require("express");

// vite 本身也是使用的这个
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:5000",
    changeOrigin: true,
    // 这里是 pathRewrite，跟 vite 不太一样
    pathRewrite: (path) => path.replace(/^\/api/, ""),
  })
);

app.use(express.static("dist"));

// serve index.html for all routes
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
