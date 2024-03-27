import { BinaryTree } from "../../dataTypes/tree";
import { minimalHeight } from "../4-02/minimalHeight";
//TODO: We can improve the O here
describe(`BinaryTree`, () => {
  describe(`Test if valid BST`, () => {
    it(`balanced tree is true`, () => {
      const bt = minimalHeight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 63]);
      const valid = bt!.isValidBST();
      expect(valid).toBeTruthy();
    })

    it(`unbalanced tree is false`, () => {
      const bt = new BinaryTree(5, [7,8]);
      bt.left!.left = new BinaryTree(1, [3,2]);
      const valid = bt!.isValidBST();
      expect(valid).toBeFalsy();
    })
  })
})