export const isStrRotation = (s1: string, s2: string) => {
  return s1.length === s2.length && (s1 + s1).includes(s2);

}