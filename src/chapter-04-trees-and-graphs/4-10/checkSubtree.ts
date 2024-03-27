export interface BTree{
  left: BTree | null
  right: BTree | null
  data: number
}

const getInOrderTraversal = (bt: BTree | null, traverseArray: (number | 'X') [] = []) => {
  if (bt === null) {
    traverseArray.push('X');
    return traverseArray;
  }
  traverseArray.push(bt.data);
  getInOrderTraversal(bt.left, traverseArray);
  getInOrderTraversal(bt.right, traverseArray);

  return traverseArray;
}

const getStringTraversal = (bt: BTree) => {
  const traverseArray = getInOrderTraversal(bt);
  return traverseArray.reduce((acc, current) => {
    acc+= `${current},`
    return acc;
  }, '');
}

export const isSubtree = (tree: BTree, included: BTree) => {
  const treeSignature = getStringTraversal(tree);
  const inculdedSignature = getStringTraversal(included);
  return treeSignature.includes(inculdedSignature);
}




       