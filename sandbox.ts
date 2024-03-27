class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findBottomMostRight(root: TreeNode): number {
  let bottomMostRightValue: number = root.value;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;
    bottomMostRightValue = node.value; // Update the value at each level
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right); // Explore right subtree first
    }
  }

  return bottomMostRightValue;
}


// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);


console.log(findBottomMostRight(root)); // Output: 7
