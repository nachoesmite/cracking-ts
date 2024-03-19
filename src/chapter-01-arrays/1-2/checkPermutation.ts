export const isPermutation = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }
  //convert to arrays
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  arr1.sort();
  arr2.sort();
  return arr1.join('') === arr2.join('');
}