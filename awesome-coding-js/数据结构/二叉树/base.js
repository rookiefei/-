// 基本结构
// 插入，遍历，深度
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show() {
    console.log(this.data);
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data, null, null);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    let parent = null;
    while (current) {
      parent = current;
      if (data < parent.data) {
        current = current.left;
        if (!current) {
          parent.left = node;
          return;
        }
      } else {
        current = current.right;
        if (!current) {
          parent.right = node;
          return;
        }
      }
    }
  }
  preOrder(node) {
    if (node) {
      node.show();
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  middleOrder(node) {
    if (node) {
      this.middleOrder(node.left);
      node.show();
      this.middleOrder(node.right);
    }
  }
  laterOrder(node) {
    if (node) {
      this.laterOrder(node.left);
      this.laterOrder(node.right);
      node.show();
    }
  }
}
var t = new Tree();
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
console.log(t);
t.preOrder(t.root);
// console.log(t.getMin(), t.getMax());
