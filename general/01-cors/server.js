const express = require("express");
// const cors = require("cors"); // 添加 cors 依赖
const app = express();

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://domain2.com"],
//   })
// ); // 添加 cors 中间件

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
