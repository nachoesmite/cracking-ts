import { BTree } from "./random";

describe(`random Binary Tree Node`, () => {
  it(`simple 3 nodes tree and test`, () => {
    const bt = new BTree(2).insert(1).insert(3);
    const randNode = bt.getRandomNode(0);
    expect(randNode).toBe(bt.left);
    expect(bt.getRandomNode(1)).toBe(bt);
    expect(bt.getRandomNode(2)).toBe(bt.right);
  })
});