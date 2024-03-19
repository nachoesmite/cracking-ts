import { LinkedList } from "../../dataTypes/linkedlist";
import { partition } from "./partition";

describe(`Test partition linkedlist test`, () => {
  it(`partition [1,2,3,4,5] with 3`, () => {
    const ll = LinkedList.fromArray([1,4,5,3,2]);
    partition(ll, 3);
    const arrayToTest = ll.toArray();
    expect(arrayToTest).toStrictEqual([1,2,4,5,3])
  })

  it(`partition [3,5,8,5,10,2,1] with 3`, () => {
    const ll = LinkedList.fromArray([3,5,8,5,10,2,1]);
    partition(ll, 5);
    const arrayToTest = ll.toArray();
    expect(arrayToTest).toStrictEqual([3,2,1,5,8,5,10])
  })
});