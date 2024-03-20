import { LinkedList, Node } from "../../dataTypes/linkedlist";

export const returnLoop = <T>(ll: LinkedList<T>) => {
  let pointer = ll.head;
  const visited: Node<T>[] = [];
  while (pointer) {
    const duplicated = visited.includes(pointer);
    if (duplicated) return pointer;
    visited.push(pointer);
    pointer = pointer.next;
  }
  return null;
}
