console.log(a); // 输出：undefined
var a = 10;

console.log(b); // 错误，Uncaught ReferenceError: b is not defined
let b = 15;

console.log(c); // 错误，Uncaught ReferenceError: c is not defined
const c = 20;

function outer() {
  let a = 10;
  function inner() {
    // 可直接访问 a
    console.log(a);
  }
  return inner;
}

const closure = outer();
closure(); // 输出：10，即使 outer 已经执行完毕，closure() 函数依然能访问到 a。

// 函数接收另一个函数（回调函数）作为参数
function doSomething(onSuccess) {
  const res = "成功";
  // 调用回调函数
  onSuccess(res);
}

doSomething((res) => console.log(res)); // 输出：成功

async function loadData() {
  // 使用 await 可以等待 fetch 的结果，得到之后
  // 才执行下一行
  const res = await fetch("example.org/users");
  return await res.json();
}

loadData();
