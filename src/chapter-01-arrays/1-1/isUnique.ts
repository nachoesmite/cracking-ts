// the non thinking approach
export const isUniqueWithAditionalStructures = (str: string): boolean => {
  const chars: { [key: string]: boolean } = {};
  for (const i of str) {
    if (chars[i]) {
      return false
    }
    chars[i] = true;
  }
  return true;
}

export const isUniqueWithNativeSet = (str: string): boolean => {
  const chars = new Set();
  for (const c of str) {
    if (chars.has(c)) {
      return false;
    }
    chars.add(c);
  }
  return true;
}

export const isUniqueWithoutAditionalStructures = (str: string): boolean => {
  for (const i of str) {
    if (str.indexOf(i) !== str.lastIndexOf(i)) {
      return false;
    }
  }
  return true
}

export const isUniqueWithoutAditionalStructuresWithRegexp = (str: string): boolean => {
  for (const char of str) {
    const matches = str.match(new RegExp(char, 'g'));
    if (matches && matches.length > 1) {
      return false;
    }
  }
  return true;
}