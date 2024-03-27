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
      const visit = (bt: BinaryTree<number>) => {
        storeInOrderArray.push(bt.value)
      };
      bt.inOrderTraversal(visit);
      expect(storeInOrderArray).toStrictEqual([8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15]);
    })
    it(`Pre Order Traversal`, () => {
      const storeInOrderArray: number[] = [];
      const visit = (bt: BinaryTree<number>) => {
        storeInOrderArray.push(bt.value)
      };
      bt.preOrderTraversal(visit);
      expect(storeInOrderArray).toStrictEqual([1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15]);
    })
    it(`Post Order Traversal`, () => {
      const storeInOrderArray: number[] = [];
      const visit = (bt: BinaryTree<number>) => {
        storeInOrderArray.push(bt.value)
      };
      bt.postOrderTraversal(visit);
      expect(storeInOrderArray).toStrictEqual([8, 9, 4, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1]);
    })
  })
})

describe(`MinBinaryHeap`, () => {    
    it(`Basic Insert`, () => {  
      const minBinaryTree = new MinBinaryHeap();
      minBinaryTree.insert(4);
      expect(minBinaryTree.root!.value).toBe(4);
      minBinaryTree.insert(50);
      minBinaryTree.insert(7);
      minBinaryTree.insert(55);
      minBinaryTree.insert(90);
      minBinaryTree.insert(87);
      minBinaryTree.insert(2);
      expect(minBinaryTree.root?.value).toBe(2);

      expect(minBinaryTree.root?.left?.value).toBe(50);
      expect(minBinaryTree.root?.right?.value).toBe(4);

      expect(minBinaryTree.root?.left?.left?.value).toBe(55);
      expect(minBinaryTree.root?.left?.right?.value).toBe(90);
      expect(minBinaryTree.root?.right?.left?.value).toBe(87);
      expect(minBinaryTree.root?.right?.right?.value).toBe(7);
    })

    it(`Extracts Min`, () => {
      const mbt = new MinBinaryHeap();
      mbt.insert(1);
      mbt.insert(50);
      mbt.insert(23);
      mbt.insert(88);
      mbt.insert(90);
      mbt.insert(32);
      mbt.insert(74);
      mbt.insert(80);

      expect(mbt.root?.value).toBe(1);

      expect(mbt.root?.left?.value).toBe(50);
      expect(mbt.root?.right?.value).toBe(23);

      expect(mbt.root?.left?.left?.value).toBe(80);
      expect(mbt.root?.left?.right?.value).toBe(90);
      expect(mbt.root?.right?.left?.value).toBe(32);
      expect(mbt.root?.right?.right?.value).toBe(74);

      expect(mbt.root?.left?.left?.left?.value).toBe(88);
      expect(mbt.getMin()).toBe(1);

      expect(mbt.root?.value).toBe(23);

      expect(mbt.root?.left?.value).toBe(50);
      expect(mbt.root?.right?.value).toBe(32);

      expect(mbt.root?.left?.left?.value).toBe(80);
      expect(mbt.root?.left?.right?.value).toBe(90);
      expect(mbt.root?.right?.left?.value).toBe(88);
      expect(mbt.root?.right?.right?.value).toBe(74);

    })
})

