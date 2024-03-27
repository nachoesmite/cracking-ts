export class BST {
  left: BST | null;
  right: BST | null;
  data: number;

  constructor (value: number, left: BST | null = null, right: BST | null = null) {
    this.data = value;
    this.left = left;
    this.right = right;
  }
}

export const bstSequences = (bst: BST | null): number[][] => {
  const sequences = [];
  if (bst === null) {
    return [];
  }
  if (bst.left === null && bst.right === null) {
    sequences.push([bst.data]);
    return sequences;
  }
  const leftSequences = bstSequences(bst.left);
  const rightSequences = bstSequences(bst.right);
  for (let i = 0; i < leftSequences.length; i++) {
    for (let j = 0; j < rightSequences.length; j++) {
      sequences.push([bst.data, ...leftSequences[i], ...rightSequences[j]])
      sequences.push([bst.data, ...rightSequences[j], ...leftSequences[i],])
    }
  } 

  return sequences;

}