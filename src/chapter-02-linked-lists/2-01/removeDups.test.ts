import { LinkedList } from "../../dataTypes/linkedlist";
import { removeDups, removeDupsWithoutBuffer } from "./removeDups";

describe('Testing linkedlist removeDups', () => {
  it('Remove only first dup', () => {
    const ll = LinkedList.fromArray([1,1,2,3,4,5]);
    removeDups(ll);
    expect(ll.toArray()).toStrictEqual([1,2,3,4,5]);
  });
  it('Remove only last dup', () => {
    const ll = LinkedList.fromArray([1,2,3,4,5,5]);
    removeDups(ll);
    expect(ll.toArray()).toStrictEqual([1,2,3,4,5]);
  });
  it('Remove five dups', () => {
    const ll = LinkedList.fromArray([1,1,2,2,3,4,3,5,4,5]);
    removeDups(ll);
    expect(ll.toArray()).toStrictEqual([1,2,3,4,5]);
  });
});

describe('Testing linkedlist removeDupsWithoutBuffer', () => {
  it('Remove only first dup', () => {
    const ll = LinkedList.fromArray([1,1,2,3,4,5]);
    removeDupsWithoutBuffer(ll);
    expect(ll.toArray()).toStrictEqual([1,2,3,4,5]);
  });
  it('Remove only last dup', () => {
    const ll = LinkedList.fromArray([1,2,3,4,5,5]);
    removeDupsWithoutBuffer(ll);
    expect(ll.toArray()).toStrictEqual([1,2,3,4,5]);
  });
  it('Remove five dups', () => {
    const ll = LinkedList.fromArray([1,1,2,2,3,4,3,5,4,5]);
    removeDupsWithoutBuffer(ll);
    expect(ll.toArray()).toStrictEqual([1,2,3,4,5]);
  });
});