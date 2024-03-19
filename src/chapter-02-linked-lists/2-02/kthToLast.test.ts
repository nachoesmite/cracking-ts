import { LinkedList } from "../../dataTypes/linkedlist";
import { getKthToLast } from "./kthToLast";


describe('Testing linkedlist kthToN', () => {
  it('simple 1,2,3,4,5', () => {
    const ll: LinkedList<number> = LinkedList.fromArray([1,2,3,4,5]);
    const newLL = getKthToLast(ll, 2);
    expect(newLL?.toArray()).toStrictEqual([3,4,5]);
  });
});