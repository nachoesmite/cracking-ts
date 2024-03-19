import { LinkedList } from "../../dataTypes/linkedlist";
import { replaceNWithoutFullScan, replaceNodeN } from "./replaceN";

describe('replace n', () => {
  it('should remove the element', () => {
    const ll = LinkedList.fromArray([1,2,3,4,5]);
    const result = replaceNodeN(ll, ll.head!.next!.next!);
    expect(result.toArray()).toStrictEqual([1,2,4,5]);
  });
});

describe('replace n without full scann', () => {
  it('should remove the element', () => {
    const ll = LinkedList.fromArray([1,2,3,4,5]);
    const result = replaceNWithoutFullScan(ll.head!.next!.next!);
    expect(ll.toArray()).toStrictEqual([1,2,4,5]);
  });
});
