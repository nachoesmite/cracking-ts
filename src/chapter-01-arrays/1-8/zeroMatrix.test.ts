import { zeroMatrix } from "./zeroMatrix";

const data = [[
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 0, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 0]
  ], [
      [1, 2, 0, 4, 0],
      [6, 7, 0, 9, 0],
      [0, 0, 0, 0, 0],
      [16, 17, 0, 19, 0],
      [0, 0, 0, 0, 0]
  ],
  [
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [11, 12, 0, 14],
    [16, 17, 18, 19],
    [21, 22, 23, 24]
], [
    [1, 2, 0, 4],
    [6, 7, 0, 9],
    [0, 0, 0, 0],
    [16, 17, 0, 19],
    [21, 22, 0, 24]
]
];

describe('zero matrix', () => {
  it('should zeroe a 5x5 matrix correct', () => {
    const result = zeroMatrix(data[0]);
    expect(result).toStrictEqual(data[1]);
  });
  it('should zeroe a 4x5 matrix correct', () => {
    const result = zeroMatrix(data[2]);
    expect(result).toStrictEqual(data[3]);
  });
});
