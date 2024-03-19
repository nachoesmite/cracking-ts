import { isStrRotation } from "./isStringRotation";

describe('string rotation', () => {
  it('is string rotation', () => {
    expect(isStrRotation('abcd','cdab')).toBe(true);
  });
  it('is string rotation 2', () => {
    expect(isStrRotation('waterbottle','erbottlewat')).toBe(true);
  });
});