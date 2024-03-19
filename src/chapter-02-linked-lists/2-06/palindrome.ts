import { LinkedList } from "../../dataTypes/linkedlist";

export const isPalindrome = (ll: LinkedList<string>): boolean => {
  const wordArray = ll.toArray();
  return wordArray.join() === wordArray.reverse().join();
}