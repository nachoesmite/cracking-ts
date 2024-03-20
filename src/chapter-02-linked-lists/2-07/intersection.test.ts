import { LinkedList } from "../../dataTypes/linkedlist";
import { instersection } from "./intersection";

describe(`intersection`, () => {
  it(`test simple intersection`, () => {
    const intersected: LinkedList<number> = LinkedList.fromArray([1,2,3]);
    const ll1: LinkedList<number> = new LinkedList();
    ll1.appendToTail(1);
    ll1.appendToTail(2);
    ll1.appendNodeToTail(intersected.head!);
    const resultIntersection = instersection(intersected, ll1);
    expect(resultIntersection).toBe(intersected.head);
  })
});