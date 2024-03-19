import { LinkedList } from "../../dataTypes/linkedlist";
import { isPalindrome } from "./palindrome";


describe('test palindrome', () => {
  it('abba is a palindrome', () => {
    const ll = LinkedList.fromArray(['a','b','b','a']);
    expect(isPalindrome(ll)).toBe(true);
  })

  it('abb is not a palindrome', () => {
    const ll = LinkedList.fromArray(['a','b','b']);
    expect(isPalindrome(ll)).toBe(false);
  })
});