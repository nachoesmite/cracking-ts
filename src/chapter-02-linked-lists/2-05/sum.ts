import { LinkedList, Node } from "../../dataTypes/linkedlist";

export const sumLL = (a: LinkedList<number>, b: LinkedList<number>): LinkedList<number> | null => {
  if (a.head === null || b.head === null) {
    return null;
  }
  let iterator: Node<number> | null = a.head;
  let numA = '';
  let numB = '';
  while (iterator) {
    numA = iterator.data + numA;
    iterator = iterator.next
  }
  iterator = b.head;
  while (iterator) {
    numB = iterator.data + numB;
    iterator = iterator.next
  }

  const result = `${parseInt(numA) + parseInt(numB)}`;
  const resultLL: LinkedList<number> = new LinkedList();
  for (const c of result.split('').reverse()) {
    resultLL.appendToTail(parseInt(c));
  }

  return resultLL
}