import { BinaryTree } from "../../dataTypes/tree";
import { minimalHeight, minimalHeightIterative } from "./minimalHeight";

describe(`BinaryTree`, () => {
  describe(`Minimal Heigh (Constructa Binary Search Tree from a sorted array)`, () => {

    it(`Do in minimal height insert of ordered array`, () => {
      const bt = minimalHeight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      const storeInOrderArray: number[] = [];
      const visit = (bt: BinaryTree<number>) => {
        storeInOrderArray.push(bt.value)
      };
      bt!.inOrderTraversal(visit);

      expect(storeInOrderArray).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
    })

    it(`Do in minimal height insert of ordered array for 6 layers`, () => {
      const bt = minimalHeight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 63]);
      const storeInOrderArray: number[] = [];
      const visit = (bt: BinaryTree<number>) => {
        storeInOrderArray.push(bt.value)
      };
      bt!.inOrderTraversal(visit);

      expect(storeInOrderArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 63]);
    })

    it(`Do in minimal height using iterative resolution insert of ordered array`, () => {
      const bt = minimalHeightIterative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      const storeInOrderArray: number[] = [];
      const visit = (bt: BinaryTree<number>) => {
        storeInOrderArray.push(bt.value)
      };
      bt!.inOrderTraversal(visit);

      expect(storeInOrderArray).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
    })
  })
})

