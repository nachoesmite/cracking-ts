import { BinaryTree, MinBinaryHeap } from "./tree"

describe(`BinaryTree`, () => {
  describe(`Visit traversals`, () => {
    /*
                        1
                    /        \
                  2           3
                /  \        /    \ 
                4    5      6       7
              /  \  /  \   /  \   /  \
              8  9 10  11 12  13 14   15 
    */
    const bt = new BinaryTree(1, [2, 3]);
    bt.right!.right = new BinaryTree(7, [14, 15])
    bt.right!.left = new BinaryTree(6, [12, 13])
    bt.left!.right = new BinaryTree(5, [10, 11])
    bt.left!.left = new BinaryTree(4, [8, 9])
    
    it(`In Order Traversal`, () => {
      const storeInOrderArray: number[] = [];
      const visit = (bt: BinaryTree) => {
        storeInOrderArray.push(bt.value)
      };
      bt.inOrderTraversal(visit);
      expect(storeInOrderArray).toStrictEqual([8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15]);
    })
    it(`Pre Order Traversal`, () => {
      const storeInOrderArray: number[] = [];
      const visit = (bt: BinaryTree) => {
        storeInOrderArray.push(bt.value)
      };
      bt.preOrderTraversal(visit);
      expect(storeInOrderArray).toStrictEqual([1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15]);
    })
    it(`Post Order Traversal`, () => {
      const storeInOrderArray: number[] = [];
      const visit = (bt: BinaryTree) => {
        storeInOrderArray.push(bt.value)
      };
      bt.postOrderTraversal(visit);
      expect(storeInOrderArray).toStrictEqual([8, 9, 4, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1]);
    })
  })
})

describe(`MinBinaryHeap`, () => {    
    it(`Basic Insert`, () => {
      const minBinaryTree = new MinBinaryHeap(10);
      expect(minBinaryTree.value).toBe(10);
      minBinaryTree.insert(9);
      expect(minBinaryTree.value).toBe(9);
    })
})

