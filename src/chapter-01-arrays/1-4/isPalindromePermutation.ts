export const isPalindromePermutation = (str: string) => {
  const charsCounter = new Map<String,number>();

  for (let c of str.replace(/\s/g, '').toLowerCase()) {
    const count = charsCounter.get(c);
    charsCounter.set(c, count === undefined ? 1 : count + 1);
  }
  return Array.from(charsCounter.values()).filter(count => count % 2 !== 0).length <= 1;
}