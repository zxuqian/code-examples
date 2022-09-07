class Stack {
  stack = [];
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.isEmpty() ? "栈为空" : this.stack.pop();
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.stack.length;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

let stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(7);
console.log(stack.peek());
console.log(stack.size());

console.log(stack.pop());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
