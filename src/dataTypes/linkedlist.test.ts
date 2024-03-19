import { LinkedList } from "./linkedlist";


describe('Testing linkedlist', () => {
  it('added the items as expected', () => {
    const ll = LinkedList.fromArray([1,2,3,4,5]);
    expect(ll.toArray()).toStrictEqual([1,2,3,4,5]);
  });

  it('remove item', () => {
    const ll = LinkedList.fromArray([1,2,3,4,5]);
    ll.remove(2)
    expect(ll.toArray()).toStrictEqual([1,2,4,5]);
    ll.remove(0)
    expect(ll.toArray()).toStrictEqual([2,4,5]);
  });

});