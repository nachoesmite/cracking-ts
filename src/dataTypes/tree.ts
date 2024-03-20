export class TreeNode {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }
}

export type RawBinaryTreeChildrens = [number | null, number | null];

export class MinBinaryHeap<T> {
  left: MinBinaryHeap<T> | null;
  right: MinBinaryHeap<T> | null;
  value: T;
  parent: MinBinaryHeap<T> | null;

  constructor(value: T) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.parent = null;
  }

  insert(value: T) {
    const node = this. _addToStarterPosition(value); 
    this._percolate(node);

  }

  _percolate(node: MinBinaryHeap<T>) {
    while (node && node.parent && node.value > node.parent.value) {
      const imRight = node === node.parent.right;
      if (imRight && node.parent.left!.value < node.value) {
        const leftNode = node.parent.left;
        const temp = leftNode!.parent!.value;
        leftNode!.parent!.value = leftNode!.value;
        leftNode!.value = temp;
        //change pointer
        node = leftNode!;
        continue;
      }
      const temp = node.parent.value;
      node.parent.value = node.value;
      node.value = temp;
      //change pointer
      node = node.parent;
    }
  }


  _addToStarterPosition(value:T): MinBinaryHeap<T> {
    //ESTO NO ANDA
    const elements = [this.left, this.right];
    while (elements.length > 0) {
      const elem = elements.pop();
      if (!elem!.left) {
        elem!.left = new MinBinaryHeap(value);
        elem!.left.parent = elem!;
        return elem!.left;
      } else if(!elem!.right) {
        elem!.right = new MinBinaryHeap(value);
        elem!.right.parent = elem!;
        return elem!.right;
      } else {
        elements.push(elem!.left);
        elements.push(elem!.right);
      } 
    }
    return this.left.push(new MinBinaryHeap(value));
  }
}


export class BinaryTree {
  /**
   * Binary Tree
   * 
   * A BINARY SEARCH TREE is different than a binary tree, 
   * a binary tree is a search tree if left childrens <= NODE < right childrens. This must ve balid no only for 
   * one level, all layers must fit to this expression. 
   * 
   * BALANCED BINARY TREES
   * 
   * "balanced enough" to ensure O(log 2)
   * 
   * COMPLETE BINARY TREE
   * every level of the tree is full, except the latest one but MUST be filled left to right
   * 
   * FULL BINARY TREE
   * You cannot have one node with 1 child, 2 or 0
   * 
   * PERFECT BINARY TREE
   * all node filled this means: FULL and COMPLETE
   * How many nodes one perfect does have? Let's think
   * 1 level => 1
   * 2 levels => 3
   * 3 levels => 7
   * if k is the level then is 2^k -1
   * 
  */
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number, children: RawBinaryTreeChildrens = [null, null]) {
    this.value = value;
    this.left = children[0] !== null ? new BinaryTree(children[0]) : children[0];
    this.right = children[1] !== null ? new BinaryTree(children[1]) : children[1];
  }



  isLeaf(): boolean {
    return this.left === null && this.right === null;
  }

  inOrderTraversal(visit: (bt: BinaryTree) => unknown) {
    if (this.left) {
      this.left.inOrderTraversal(visit);
    }
    visit(this);
    if (this.right) {
      this.right.inOrderTraversal(visit);
    }
  }

  preOrderTraversal(visit: (bt: BinaryTree) => unknown) {
    visit(this);
    if (this.left) {
      this.left.preOrderTraversal(visit);
    }
    if (this.right) {
      this.right.preOrderTraversal(visit);
    }
  }
  postOrderTraversal(visit: (bt: BinaryTree) => unknown) {
    if (this.left) {
      this.left.postOrderTraversal(visit);
    }
    if (this.right) {
      this.right.postOrderTraversal(visit);
    }
    visit(this);
  }
}

// we never use this but just as an explanation of the structure
// since this is a holder of the root node is not need at all
// by the end of the day each node is in fact a tree. 
export class Tree {
  rootNode: TreeNode

  constructor(rootNodeName: string) {
    this.rootNode = new TreeNode(rootNodeName);
  }
}