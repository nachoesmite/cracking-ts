import { isPermutation } from './checkPermutation';

describe('isPermutation', () => {
  it('should return true for two empty strings', () => {
    expect(isPermutation('', '')).toBe(true);
  });

  it('should return true for two strings that are permutations of each other', () => {
    expect(isPermutation('abc', 'cba')).toBe(true);
  });

  it('should return false for two strings that are not permutations of each other', () => {
    expect(isPermutation('abc', 'def')).toBe(false);
  });

  it('should return false for two strings of different lengths', () => {
    expect(isPermutation('abc', 'abcd')).toBe(false);
  });
});