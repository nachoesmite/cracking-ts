import { isUniqueWithAditionalStructures, isUniqueWithNativeSet, isUniqueWithoutAditionalStructures, isUniqueWithoutAditionalStructuresWithRegexp } from './isUnique';

describe('1-1 isUniqueWithAditionalStructures', () => {
  it('should return true for a string with all unique characters', () => {
    const result = isUniqueWithAditionalStructures('abcdefg');
    expect(result).toBe(true);
  });

  it('should return false for a string with non-unique characters', () => {
    const result = isUniqueWithAditionalStructures('aabcdefg');
    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const result = isUniqueWithAditionalStructures('');
    expect(result).toBe(true);
  });
});

describe('1-1 isUniqueWithNativeSet', () => {
  it('should return true for a string with all unique characters', () => {
    const result = isUniqueWithNativeSet('abcdefg');
    expect(result).toBe(true);
  });

  it('should return false for a string with non-unique characters', () => {
    const result = isUniqueWithNativeSet('aabcdefg');
    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const result = isUniqueWithNativeSet('');
    expect(result).toBe(true);
  });
});

describe('1-1 isUniqueWithoutAditionalStructures', () => {
  it('should return true for a string with all unique characters', () => {
    const result = isUniqueWithoutAditionalStructures('abcdefg');
    expect(result).toBe(true);
  });

  it('should return false for a string with non-unique characters', () => {
    const result = isUniqueWithoutAditionalStructures('aabcdefg');
    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const result = isUniqueWithoutAditionalStructures('');
    expect(result).toBe(true);
  });
});

describe('1-1 isUniqueWithoutAditionalStructuresWithRegexp', () => {
  it('should return true for a string with all unique characters', () => {
    const result = isUniqueWithoutAditionalStructuresWithRegexp('abcdefg');
    expect(result).toBe(true);
  });

  it('should return false for a string with non-unique characters', () => {
    const result = isUniqueWithoutAditionalStructuresWithRegexp('aabcdefg');
    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const result = isUniqueWithoutAditionalStructuresWithRegexp('');
    expect(result).toBe(true);
  });
});