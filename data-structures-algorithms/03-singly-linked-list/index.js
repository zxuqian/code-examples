class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  findNode(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      return null;
    }
    return currentNode;
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    const currentNode = this.findNode(value);

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  append(value) {
    const newNode = new Node(value);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(value) {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === this.head) {
      this.head = currentNode.next;
    } else {
      previousNode.next = currentNode.next;
    }
  }

  removeHead() {
    this.head = this.head.next;
  }

  removeTail() {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let list = new LinkedList(1);

list.append(2);
list.append(3);
list.append(4);

list.insertAfter(2, 5);

list.prepend(6);

list.remove(3);

list.removeHead();

list.removeTail();
list.traverse();
