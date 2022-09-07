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

  traversePreOrder(treeNode) {
    if (!treeNode) {
      return;
    }

    console.log(treeNode.value);
    this.traversePreOrder(treeNode.left);
    this.traversePreOrder(treeNode.right);
  }

  traverseInOrder(treeNode) {
    if (!treeNode) {
      return;
    }

    this.traverseInOrder(treeNode.left);
    console.log(treeNode.value);
    this.traverseInOrder(treeNode.right);
  }

  traversePostOrder(treeNode) {
    if (!treeNode) {
      return;
    }

    this.traversePostOrder(treeNode.left);
    this.traversePostOrder(treeNode.right);
    console.log(treeNode.value);
  }
}

// 示例，先暂时手动创建树，后面视频再讲通过其它数据结构还原一棵树
const root = new TreeNode(13);
root.left = new TreeNode(6);
root.right = new TreeNode(20);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(9);
root.left.right.left = new TreeNode(7);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(28);
root.right.right.right = new TreeNode(32);

const tree = new Tree(root);
// tree.traversePreOrder(root); // 13, 6, 3, 9, 7, 20, 15, 28, 32
// tree.traverseInOrder(root); // 3, 6, 7, 9, 13, 15, 20, 28, 32
// tree.traversePostOrder(root); // 3, 7, 9, 6, 15, 32, 28, 20, 13
