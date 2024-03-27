import { BST } from "./successor";

describe(`BST successor`, () => {
  it(`has right subtree and left all`, () => {
    const root = new BST(10, null);
    const left = new BST(5, root);
    const right = new BST(15, root);
    root.insertLeft(left);
    root.insertRight(right);
    const leftLeft = new BST(2, left);
    const leftRight = new BST(7, left);
    left.insertLeft(leftLeft);
    left.insertRight(leftRight);
    const rightLeft = new BST(12, right);
    const rightRight = new BST(17, right);
    right.insertLeft(rightLeft);
    right.insertRight(rightRight);
    const result = root.getSucessor();
    expect(result!.value).toBe(12);
  })
  it(`hasn't right subtree and left all`, () => {
    const root = new BST(10, null);
    const left = new BST(5, root);
    const right = new BST(15, root);
    root.insertLeft(left);
    root.insertRight(right);
    const leftLeft = new BST(2, left);
    const leftRight = new BST(7, left);
    left.insertLeft(leftLeft);
    left.insertRight(leftRight);
    const rightLeft = new BST(12, right);
    const rightRight = new BST(17, right);
    right.insertLeft(rightLeft);
    right.insertRight(rightRight);
    expect(right.right!.getSucessor()).toBeNull();
    expect(right.left!.getSucessor()?.value).toBe(right.value);

  })
});