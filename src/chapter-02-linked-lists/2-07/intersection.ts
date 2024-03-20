import { LinkedList, Node } from "../../dataTypes/linkedlist";

export const instersection = <T>(ll1: LinkedList<T>, ll2: LinkedList<T>): Node<T> | null => {
  let p1: Node<T> | null = ll1.head;
  let p2: Node<T> | null = ll2.head;
  const lengthll1 = length(ll1);
  const lengthll2 = length(ll2);
  const diff = Math.abs(lengthll1 - lengthll2);

  if (lengthll1 > lengthll2) {
    for(let i = 0; i < diff; i++) {
      p1 = p1!.next;
    }
  } else if (lengthll2 > lengthll1) {
    for(let i = 0; i < diff; i++) {
      p2 = p2!.next;
    }
  }

  while (p1 !== p2) {
    p1 = p1!.next;
    p2 = p2!.next;
  }

  return p1;
}

const length = <T>(ll: LinkedList<T>) => {
  let counter = 0;
  let p1 = ll.head;
  while(p1) {
    counter++;
    p1 = p1.next;
  }
  return counter;
}