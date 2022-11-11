function fib(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
console.log(fib(155));

// fib using recursion
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
