import { isPalindromePermutation } from "./isPalindromePermutation";

describe('isPalindromePermutation', () => {
  it('should return true for a string that can be rearranged into a palindrome', () => {
    expect(isPalindromePermutation('Tact Coa')).toBe(true);
  });

  it('should return false for a string that cannot be rearranged into a palindrome', () => {
    expect(isPalindromePermutation('This is not a palindrome')).toBe(false);
  });

  it('should handle strings with only one character', () => {
    expect(isPalindromePermutation('a')).toBe(true);
  });

  it('should handle empty strings', () => {
    expect(isPalindromePermutation('')).toBe(true);
  });
});

