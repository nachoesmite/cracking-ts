export class TreeNode {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }
}

export type RawBinaryTreeChildrens<T> = [T | null, T | null];

export class MinBinaryHeap<T> {
  /*
  * A MinBinaryHeap is a complete binary tree with a node is minimum from its childs 
  **/
  root: MinBinaryHeapNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const node = this. _addToStarterPosition(value); 
    this._percolate(node);

  }

  getMin(): T | null {
    if (!this.root) {
      return null;
    }
    const value = this.root.value;
    const newRoot = this._findBottomMostRightNode()!;
    if (newRoot.parent === null) {
      this.root = null;
    } else {
      if (newRoot.parent.left === newRoot) {
        newRoot.parent.left = null;
      } else {
        newRoot.parent.right = null;
      }
      this.root.value = newRoot.value;
      newRoot.parent = null;
    }

    this._fixRoot();

    return value;
  }

  _fixRoot() {
    let node = this.root!;
    while (node.left && node.left.value < node.value || 
      node.right && node.right.value < node.value) {
        if (!node.right) {
          [node.value, node.left!.value] = [node.left!.value, node.value];
          node = node.left!;
        } else if (!node.left) {
          [node.value, node.right!.value] = [node.right!.value, node.value];
          node = node.right!;
        } else {
          if (node.right!.value > node.left!.value) {
            [node.value, node.left!.value] = [node.left!.value, node.value];
            node = node.left!;
          } else {
            [node.value, node.right!.value] = [node.right!.value, node.value];
            node = node.right!;
          }
        }
      }
  }
  _findBottomMostRightNode(): MinBinaryHeapNode<T> | null {
    if (!this.root) {
      return null
    }
    let bottomMostRight = this.root;
    const queue: MinBinaryHeapNode<T>[] = [this.root];
  
    while (queue.length > 0) {
      const node = queue.shift()!;
      bottomMostRight = node; // Update the value at each level
      if (node.right) {
        queue.push(node.right); // Explore right subtree first
      }
      if (node.left) {
        queue.push(node.left);
      }
    }
  
    return bottomMostRight;
  }

  _percolate(node: MinBinaryHeapNode<T>) {
    while (node && node.parent && node.value < node.parent.value) {
      const imRight = node === node.parent.right;
      if (imRight && node.parent.left!.value < node.value) {
        const leftNode = node.parent.left;
        const temp = leftNode!.parent!.value;
        leftNode!.parent!.value = leftNode!.value;
        leftNode!.value = temp;
        node = leftNode!;
        continue;
      }
      const temp = node.parent.value;
      node.parent.value = node.value;
      node.value = temp;
      node = node.parent;
    }
  }


  _addToStarterPosition(value:T): MinBinaryHeapNode<T> {
    const newNode = new MinBinaryHeapNode(value);

    if (!this.root) {
      this.root = newNode;
      return newNode;
    }

    const elements: MinBinaryHeapNode<T>[] = [this.root];

    if (this.root.left) {
      elements.push(this.root.left);
    }
    if (this.root.right) {
      elements.push(this.root.right);
    }

    while (elements.length > 0) {
      const elem = elements.splice(0,1)[0];
      if (!elem.left) {
        elem.left = newNode;
        elem.left.parent = elem!;
        break;
      } else if(!elem.right) {
        elem.right = newNode;
        elem.right.parent = elem!;
        break;
      } else {
        elements.push(elem.left);
        elements.push(elem.right);
      } 
    }
    return newNode;
  }

}

export class MinBinaryHeapNode<T> {
  left: MinBinaryHeapNode<T> | null;
  right: MinBinaryHeapNode<T> | null;
  value: T;
  parent: MinBinaryHeapNode<T> | null;

  constructor(value: T) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.parent = null;
  }

}


export class BinaryTree<T> {
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
  value: T;
  left: BinaryTree<T> | null;
  right: BinaryTree<T> | null;

  constructor(value: T, children: RawBinaryTreeChildrens<T> = [null, null]) {
    this.value = value;
    this.left = children[0] !== null ? new BinaryTree(children[0]) : null;
    this.right = children[1] !== null ? new BinaryTree(children[1]) : null;
  }

  isLeaf(): boolean {
    return this.left === null && this.right === null;
  }

  height(node: BinaryTree<T> | null = null, height:number = -1): number {
    const currentNode = node ?? this;
    height++;
    const max = [height];
    if (currentNode.left) {
      max.push(this.height(currentNode.left, height));
    }
    if (currentNode.right) {
      max.push(this.height(currentNode.right, height));
    }
    return Math.max(...max);
    
  }

  inOrderTraversal(visit: (bt: BinaryTree<T>) => unknown) {
    
    if (this.left) {
      this.left.inOrderTraversal(visit);
    }
    visit(this);
    if (this.right) {
      this.right.inOrderTraversal(visit);
    }
  }

  preOrderTraversal(visit: (bt: BinaryTree<T>) => unknown) {
    visit(this);
    if (this.left) {
      this.left.preOrderTraversal(visit);
    }
    if (this.right) {
      this.right.preOrderTraversal(visit);
    }
  }
  postOrderTraversal(visit: (bt: BinaryTree<T>) => unknown) {
    if (this.left) {
      this.left.postOrderTraversal(visit);
    }
    if (this.right) {
      this.right.postOrderTraversal(visit);
    }
    visit(this);
  }

  isValidBST(): boolean {
    return this._isValidBST(this);
  }

  _isValidBST(node: BinaryTree<T> | null): boolean {
    if (node === null) {
      return true;
    }
    if (node.left && node.left.value > node.value) {
      return false;
    }

    if (node.right && node.right.value < node.value) {
      return false
    }

    return (this._isValidBST(node.left) && this._isValidBST(node.right))
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