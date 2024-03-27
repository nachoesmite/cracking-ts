import { CommonAncestorBTree, getCommonAncestor } from "./commonAncestor";

describe(`BTree common ancestor`, () => {
  it('find an easy common ancestor', () => {
    //1 | 2 3 | 4 5 6 7
    const bt = new CommonAncestorBTree(1, new CommonAncestorBTree(2, null, null, null), new CommonAncestorBTree(3, null, null, null), null);
    bt.left!.parent = bt;
    bt.right!.parent = bt;
    bt.left!.left = new CommonAncestorBTree(4, null,null,bt.left);
    bt.left!.right = new CommonAncestorBTree(5, null,null,bt.left);
    bt.right!.left = new CommonAncestorBTree(6, null,null,bt.right);
    bt.right!.right = new CommonAncestorBTree(7, null,null,bt.right);
    
    const commonAncestor = getCommonAncestor(bt.right!.right, bt.left!.left);

    expect(commonAncestor).toEqual(bt);
  });
  it('find a closer common ancestor', () => {
    //1 | 2 3 | 4 5 6 7
    const bt = new CommonAncestorBTree(1, new CommonAncestorBTree(2, null, null, null), new CommonAncestorBTree(3, null, null, null), null);
    bt.left!.parent = bt;
    bt.right!.parent = bt;
    bt.left!.left = new CommonAncestorBTree(4, null,null,bt.left);
    bt.left!.right = new CommonAncestorBTree(5, null,null,bt.left);
    bt.right!.left = new CommonAncestorBTree(6, null,null,bt.right);
    bt.right!.right = new CommonAncestorBTree(7, null,null,bt.right);
    
    const commonAncestor = getCommonAncestor(bt.right!.right, bt.right!.left);

    expect(commonAncestor).toEqual(bt.right);
  });
});