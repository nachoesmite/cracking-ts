import { LinkedList, Node } from "../../dataTypes/linkedlist";
import { returnLoop } from "./detectLoop";


describe(`detectLoop`, () => {
  it(`it detect the sample of the exercise`, () => {
    const ll = LinkedList.fromArray(['A', 'B']);
    const nodeC = new Node('C');
    ll.head!.next!.next = nodeC;
    nodeC.next = new Node('D');
    nodeC.next.next = new Node('E');
    nodeC.next.next.next = nodeC;
    const returnLoopNode = returnLoop(ll);
    expect(returnLoopNode === nodeC).toBe(true);
  })

  it(`it returns null for non circular`, () => {
    const ll = LinkedList.fromArray(['A', 'B', 'C', 'D']);
    const returnLoopNode = returnLoop(ll);
    expect(returnLoopNode).toBeNull();
  })
});