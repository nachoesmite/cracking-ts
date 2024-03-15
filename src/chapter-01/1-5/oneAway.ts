export const isOneEditAway = (source:string, edited: string): boolean => {
  const isOneReplace = isOneReplaceAway(source, edited);
  const isOneRemoveOrAdd = isOneRemoveOrAddAway(source, edited);

  return isOneReplace || isOneRemoveOrAdd;
}



const isOneReplaceAway = (source: string, edited: string): boolean => {

  if (source.length !== edited.length) {
    return false;
  }
  let missing = 0;
  for (let i = 0; i < edited.length; i++) {
    if (edited[i] !== source[i]) {
      missing++;
      if (missing > 1) {
        return false
      }
    }
  }
  return true;
}

const isOneRemoveOrAddAway = (source:string, edited: string): boolean => {
  const diff = source.length - edited.length;
  if (Math.abs(diff) > 1) {
    return false;
  }
  const shorterString = (diff < 0) ? source : edited; 
  const longerString = (diff >= 0) ? source : edited; 
  let offset = 0;
  for (let i = 0; i < shorterString.length; i++) {
    if (shorterString[i] !== longerString[i + offset]) {
      offset++;
      if (offset > 1 || shorterString[i] !== longerString[i + offset]) {
        return false
      }
    }
  }
  return true;
}

