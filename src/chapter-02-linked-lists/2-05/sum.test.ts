import { LinkedList } from "../../dataTypes/linkedlist";
import { sumLL } from "./sum";


describe(`sum of linked lists stored in reverse order`, () => {
  it(`617 + 295 = 912 => [7,1,6] + [5,9,2] = [1,2,9]`, () => {
    const a = LinkedList.fromArray([7,1,6]);
    const b = LinkedList.fromArray([5,9,2]);
    const result = sumLL(a,b)?.toArray();
    expect(result).toStrictEqual([2,1,9]);
  })
});