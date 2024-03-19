import { LinkedList, Node } from "../../dataTypes/linkedlist"

export const removeDups = <T>(ll: LinkedList<T>): LinkedList<T> => {
  const set: Set<T> = new Set();
  const indexesToRemove: number[] = [];
  let index = -1;
  ll.traverse((node: Node<T>) => {
    index ++;
    if (set.has(node.data)) {
      indexesToRemove.push(index);
    } else {
      set.add(node.data);
    }
  });
  let offset = 0;
  for (let indexToRemove of indexesToRemove ) {
    ll.remove(indexToRemove - offset);
    offset++;
  }

  return ll;
}

export const removeDupsWithoutBuffer = <T>(ll: LinkedList<T>): LinkedList<T> => {
  if (ll.head && ll.head.next) {
    let p1: Node<T> | null = ll.head;
    let p2: Node<T> | null = ll.head?.next;
    while(p1) {
      let prev = null;
      while(p2) {
        if (p2.data === p1.data) {
          if (prev === null) {
            p1.next = p2.next;
          } else {
            prev.next = p2.next;
          }
        }
        prev = p2;
        p2 = p2.next;
      }
      p1 = p1.next;
      if (p1 && p1.next) {
        p2 = p1.next;
      } else {
        return ll;
      }
    }
  }
  return ll;

}