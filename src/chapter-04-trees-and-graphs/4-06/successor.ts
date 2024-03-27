export class BST {
  value: number;
  left: BST | null;
  right: BST | null;
  parent: BST | null;

  constructor(value: number, parent: BST | null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }

  insertLeft(node: BST) {
    this.left = node;
    node.parent = this;
  }
  insertRight(node: BST) {
    this.right = node;
    node.parent = this;
  }


  getSucessor(): BST | null {
    let result = null;
    if (this.right) {
      let p1 = this.right;
      while (p1.left) {
        p1 = p1.left;
      }
      result = p1;
    } else {
      let p1: BST | null = this;
      while (p1.parent && p1.parent.right === p1) {
        p1 = p1.parent;
      }
      if (p1.parent) {
        result = p1.parent;
      }
    }
    return result;
  }
}



