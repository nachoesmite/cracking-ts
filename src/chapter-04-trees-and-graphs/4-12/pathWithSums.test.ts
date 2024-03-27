import { BTree, getPathsWithSum } from "./pathsWithSums";

describe(`sum of nodes`, () => {
  it(`should be at least 2 options`, () => {
    const bt: BTree = {
      data: 1,
      left: {
        data: 2,
        left: {
          data: 6,
          left: null,
          right: null,
        },
        right: {
          data: 7,
          left: null,
          right: null
        }
      }, 
      right: {
        data: 3,
        left: {
          data: 4,
          left: null,
          right: null
        },
        right: {
          data: 5,
          left: null,
          right: null
        }
      }
    };
    const paths = getPathsWithSum(bt, 9);

    expect(paths).toStrictEqual([[1,2,6],[2,7],[1,3,5]]);

  })

  it(`should be at least 2 options, and include the solo number`, () => {
    const bt: BTree = {
      data: 1,
      left: {
        data: 2,
        left: {
          data: 6,
          left: null,
          right: null,
        },
        right: {
          data: 7,
          left: null,
          right: null
        }
      }, 
      right: {
        data: 3,
        left: {
          data: 4,
          left: null,
          right: null
        },
        right: {
          data: 5,
          left: null,
          right: null
        }
      }
    };
    const paths = getPathsWithSum(bt, 3);

    expect(paths).toStrictEqual([[1,2],[3]]);

  })
})