class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  breadthFirstTraversal() {
    let result = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      result.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return result;
  }
}

// 示例，先暂时手动创建树，后面视频再讲通过其它数据结构还原一棵树
const root = new TreeNode(13);
root.left = new TreeNode(6);
root.right = new TreeNode(20);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(9);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(28);

const tree = new Tree(root);
console.log(tree.breadthFirstTraversal());
