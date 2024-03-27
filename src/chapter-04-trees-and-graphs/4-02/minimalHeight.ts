import { BinaryTree } from "../../dataTypes/tree"
// minimal BST
export const minimalHeight = (arr: number[]): BinaryTree<number> | null => {
  if (arr.length === 0) {
    return null;
  }
  const nodeCandidate = Math.ceil(arr.length/2) - 1;
  const newBt = new BinaryTree(arr[nodeCandidate]);
  const [left, right] = [arr.slice(0, nodeCandidate), arr.slice(nodeCandidate+1, arr.length)];

  newBt.left = minimalHeight(left);
  newBt.right = minimalHeight(right);

  return newBt;

}

export const minimalHeightIterative = (sortedArr: number[]): BinaryTree<number> | null => {
  if (sortedArr.length === 0) {
    return null
  }
  const bt = new BinaryTree(-1)
  const queue = [{node: bt, arr: sortedArr}];

  while(queue.length > 0) {
    const item = queue.shift();
    const arr = item!.arr;
    const node = item!.node;
    
    const rootIndex = Math.ceil(arr.length/2) -1;
    node.value = arr[rootIndex];

    if (rootIndex !== 0) {
      const left = item!.arr.slice(0, rootIndex);
      node.left = new BinaryTree(-1);
      queue.push({node: node.left, arr: left });
    } 
    
    if (rootIndex < arr.length -1) {
      const right = item!.arr.slice(rootIndex+1, item!.arr.length);
      node.right = new BinaryTree(-1);
      queue.push({node: node.right!, arr: right });
    }
  }

  return bt;


}
