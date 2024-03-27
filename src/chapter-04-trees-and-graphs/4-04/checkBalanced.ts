import { BinaryTree } from "../../dataTypes/tree";

export const isBalancedTree = (bt: BinaryTree<number>): boolean => {

  let isBalanced = true;
  const visit = (bt: BinaryTree<number>) => {
    const left = bt.left?.height();
    const right = bt.right?.height();

    if (left !== undefined && right !== undefined) {
      isBalanced = Math.abs(left - right) <= 1
    } else if (left === undefined && right !== undefined) {
      isBalanced = right === 0;
    } else if (right === undefined && left !== undefined) {
      isBalanced = left === 0;
    }

    return !isBalanced;
  }
  bt.inOrderTraversal(visit);

  return isBalanced;
}