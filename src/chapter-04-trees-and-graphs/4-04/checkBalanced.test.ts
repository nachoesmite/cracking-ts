import { BinaryTree } from "../../dataTypes/tree";
import { minimalHeight } from "../4-02/minimalHeight";
import { isBalancedTree } from "./checkBalanced";
//TODO: We can improve the O here
describe(`BinaryTree`, () => {
  describe(`Testing Height and Balanced`, () => {
    it(`First lest test just the height method`, () => {
      const bt = minimalHeight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 63]);
      const height = bt!.height();
      expect(height).toBe(6);
    })
    it(`tree balanced (depth 6)`, () => {
      const bt = minimalHeight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 63]);
      const isBalanced = isBalancedTree(bt!);
      expect(isBalanced).toBeTruthy();
    })

    it(`unbalanced tree is false`, () => {
      const bt = new BinaryTree(5, [7,8]);
      bt.left!.left = new BinaryTree(1, [2,3]);
      const isBalanced = isBalancedTree(bt!);
      expect(isBalanced).toBeFalsy();
    })
  })
})