class Queue {
  items = [];

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "队列为空";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  front() {
    if (this.isEmpty()) {
      return "队列为空";
    }
    return this.items[0];
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(
  "队列大小：" + queue.size()
);
console.log(
  "查看队首元素：" +
    queue.front()
);

const ele = queue.dequeue();
console.log(
  "出队元素：" + ele
);

console.log(
  "队列大小：" + queue.size()
);
console.log(
  "查看队首元素：" +
    queue.front()
);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
