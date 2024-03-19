import { LinkedList } from "../../dataTypes/linkedlist";

export const partition = (ll: LinkedList<number>, partition: number) => {
  let leftPartition: LinkedList<number> = new LinkedList();
  
  let iterator = ll.head;
  let prevIterator = null;
  let latestLeft = null;
  while (iterator) {
    if (iterator.data < partition) {
      latestLeft = leftPartition.appendToTail(iterator.data);
      if (prevIterator) {
        prevIterator.next = iterator.next;
      } else {
        ll.head = iterator.next;
        iterator = ll.head;
        continue;
      }
    } else {
      prevIterator = iterator;
    }
    iterator = iterator.next;
  }
  if (latestLeft) {
    latestLeft.next = ll.head;
    ll.head = leftPartition.head;
  }

}