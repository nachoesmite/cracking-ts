import { BTree, isSubtree } from "./checkSubtree";

describe(`CHeckSubtree`, () => {
  it(`an easy 3 nodes tree`, () => {
    const tree: BTree = {
      data: 2,
      left: {
        data: 1,
        left: null,
        right: null
      },
      right: {
        data: 3,
        left: null,
        right: null
      }
    }

    const result = isSubtree(tree, {data: 3, left: null, right: null});
    expect(result).toBeTruthy();
  })
  it(`an easy 6 nodes btree balanced`, () => {
    const tree: BTree = {
      data: 8,
      left: {
        data: 4,
        left: {
          data: 3,
          left: null,
          right: null
        },
        right: {
          data: 5,
          left: null,
          right: null
        }
      },
      right: {
        data: 12,
        left: {
          data: 11,
          left: null,
          right: null
        },
        right: {
          data: 13,
          left: null,
          right: null
        }
      }
    }

    const result = isSubtree(tree, {
      data: 12,
      left: {
        data: 11,
        left: null,
        right: null
      },
      right: {
        data: 13,
        left: null,
        right: null
      }
    });
    expect(result).toBeTruthy();
  })
  it(`a 6 nodes balanced btree should fail with a non balanced subtree`, () => {
    const tree: BTree = {
      data: 8,
      left: {
        data: 4,
        left: {
          data: 3,
          left: null,
          right: null
        },
        right: {
          data: 5,
          left: null,
          right: null
        }
      },
      right: {
        data: 12,
        left: {
          data: 11,
          left: null,
          right: null
        },
        right: {
          data: 13,
          left: null,
          right: null
        }
      }
    }

    const result = isSubtree(tree, {
      data: 11,
      left: null,
      right: {
        data: 12,
        left: null,
        right: {
          data: 13,
          left: null,
          right: null
        }
      }
    });
    expect(result).toBeFalsy();
  })
});