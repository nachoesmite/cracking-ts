import { LinkedList, Node } from "../../dataTypes/linkedlist"

export const getKthToLast = <T>(ll: LinkedList<T>, index: number): LinkedList<T> | null => {
  let currentIndex = 0; 
  let current: Node<T> | null
  if (ll.head) {
    current= ll.head;
  } else {
    return null;
  }

  while (currentIndex <= index && current) {
    if (currentIndex === index) {
      const newLL: LinkedList<T> = new LinkedList();
      newLL.head = current;
      return newLL;
    }
    if (current.next) {
      current = current.next;
    } 
    currentIndex++;
  }
  return null;
}