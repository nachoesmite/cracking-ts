import { minimalHeight } from "../4-02/minimalHeight";
import { getDepths } from "./listOfDepts";

describe(`BinaryTree`, () => {
  describe(`Store nodes in linkedlist for each depth`, () => {
    it(`Do in minimal height insert of ordered array for 6 layers`, () => {
      const bt = minimalHeight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 63]);
      const linkedlists = getDepths(bt!);
      expect(linkedlists[0].toArray()).toStrictEqual([32]);
      expect(linkedlists[1].toArray()).toStrictEqual([16,48]);
      expect(linkedlists[2].toArray()).toStrictEqual([8, 24, 40, 56]);
      expect(linkedlists[3].toArray()).toStrictEqual([4, 12, 20, 28, 36, 44, 52, 60]);
      expect(linkedlists[4].toArray()).toStrictEqual([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62]);
      expect(linkedlists[5].toArray()).toStrictEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63]);
    })
  })
})

