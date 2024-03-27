import { BST, bstSequences } from "./bstSequences";

describe(`BSTree sequences`, () => {
  it('find an easy common ancestor', () => {
    
    const bt = new BST(8, new BST(4, new BST(2), new BST(6)), new BST(12, new BST(9), new BST(15)))
    
    const sequences = bstSequences(bt);

    expect(sequences).toEqual([[8,4,2,6,12,9,15],[8,12,9,15,4,2,6],[8,4,2,6,12,15,9],[8,12,15,9,4,2,6],[8,4,6,2,12,9,15],[8,12,9,15,4,6,2],[8,4,6,2,12,15,9],[8,12,15,9,4,6,2]]);
  });
});