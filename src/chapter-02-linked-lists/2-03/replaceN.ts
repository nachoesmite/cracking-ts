import { LinkedList, Node } from "../../dataTypes/linkedlist"

export const replaceNodeN = <T>(ll: LinkedList<T>, node: Node<T>): LinkedList<T> => {
  // linked list has head
  // linked list head is <> than node (first one)
  // node.next != null -> isn't the last one
  if (ll.head && ll.head !== node && node.next) {
    //this starts on the second element of the ll by definition of the exercise
    let current: Node<T> | null = ll.head.next;
    // prev sets up to first element
    let prev = ll.head;
    while (current) {
      if (current === node) {
        prev.next = current.next;
        return ll;
      }
      prev = current;
      current = current.next;
    }
  }
  return ll;
}

export const replaceNWithoutFullScan = <T>(node: Node<T>): T | null=> {
  if (node.next === null) {
    return null;
  }
  const lastResult = replaceNWithoutFullScan(node.next);
  const resultToReturn = node.data;
  if (lastResult === null) {
    node.data = node.next.data;
    node.next = null;
  } else {
    node.data = lastResult
  }
  return resultToReturn;
}