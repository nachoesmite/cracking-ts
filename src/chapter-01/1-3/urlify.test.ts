import { urlify } from './urlify';

describe('urlify', () => {
  it('should replace spaces with %20', () => {
    expect(urlify('Mr John Smith    ', 13)).toBe('Mr%20John%20Smith');
  });

  it('should handle strings with no spaces', () => {
    expect(urlify('MrJohnSmith', 11)).toBe('MrJohnSmith');
  });

  it('should handle empty strings', () => {
    expect(urlify('', 0)).toBe('');
  });

  it('should handle strings with only spaces', () => {
    expect(urlify('     ', 5)).toBe('%20%20%20%20%20');
  });
});