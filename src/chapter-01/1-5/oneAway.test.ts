import { isOneEditAway } from "./oneAway";

describe('isOneEditAway', () => {
  it('should return true for one add', () => {
    expect(isOneEditAway('ple', 'pale')).toBe(true);
  });

  it('should return true for one deletion', () => {
    expect(isOneEditAway('pale', 'ple')).toBe(true);
  });

  it('should return true on 1 add', () => {
    expect(isOneEditAway('pale', 'pales')).toBe(true);
  });

  it('should return true on one replace', () => {
    expect(isOneEditAway('bale','pale')).toBe(true);
  });

  it('should return false on 2 replaces', () => {
    expect(isOneEditAway('bake','pale')).toBe(false);
  });
});

