
export const compressString = (str: string): string => {
  if (str.length === 0) {
    return '';
  }
  let currentChar = str[0];
  let currentCounter = 0;
  let result = '';
  for (const c of str) {
    if (c === currentChar) {
      currentCounter++;
    } else {
      result += `${currentChar}${currentCounter}`;
      currentChar = c;
      currentCounter = 1;
    }
  }
  result += `${currentChar}${currentCounter}`;

  return result;
}