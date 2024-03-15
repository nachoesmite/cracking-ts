import { compressString } from './compress';

describe('compressString', () => {
  it('should return compressed string', () => {
    expect(compressString('aabcccccaaa')).toBe('a2b1c5a3');
  });

  it('should handle strings with no repeating characters', () => {
    expect(compressString('abc')).toBe('a1b1c1');
  });

  it('should handle empty strings', () => {
    expect(compressString('')).toBe('');
  });

  it('should handle strings with a single character', () => {
    expect(compressString('aaaaa')).toBe('a5');
  });

  it('should handle the sample of the exercise :)', () => {
    expect(compressString('aabcccccaaa')).toBe('a2b1c5a3');
  });
});