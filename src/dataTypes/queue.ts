import { NoSuchElementException } from "./error";

class MyQueueNode<T> {
  data: T;
  next: MyQueueNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}


export class MyQueue<T> {
  first: MyQueueNode<T> | null;
  last: MyQueueNode<T> | null;
  min: MyQueueNode<T> | null;

  constructor(data? : T) {
    if (data) {
      const node = new MyQueueNode(data);
      this.first = node;
      this.last = node;
    } else {
      this.first = null;
      this.last = null;
    }
    this.min = null;
  }

  add(item: T) {
    const newNode = new MyQueueNode(item);
    //when last is null, last and first are nulls
    if (this.last === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  remove(): T {
    if (this.first === null) {
      throw new NoSuchElementException();
    }

    const data = this.first.data;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }
    return data;

  }

  peek(): T {
    if (this.first === null) {
      throw new NoSuchElementException();
    }
    return this.first.data;
  }

  isEmpty(): boolean {
    return this.first === null;
  }
}