export const urlify = (str: string, length: number): string => {
  let returnUrl = "";
  for (let i = 0; i < length; i++) {
    returnUrl += str[i] === " " ? "%20" : str[i];
  }
  return returnUrl;
}


