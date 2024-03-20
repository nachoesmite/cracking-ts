import { EmptyStackException } from "./error";

class MyStackNode<T> {
  next: MyStackNode<T> | null;
  data: T;
  min: T;

  constructor(data: T, min? : T) {
    this.data = data;
    this.next = null;
    this.min = min ?? data;
  }
}

export class MyStack<T> {
  top: MyStackNode<T> | null;
  size: number;

  constructor(data?: T) {
    if (!data) {
      this.top = null;
      this.size = 0;
    } else {
      this.top = new MyStackNode(data);
      this.size = 1;
    }
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  push(data: T): MyStackNode<T> {
    let min = data;
    if (this.top) {
      if (this.top.min < data) {
        min = this.top.min
      }
    }
    const newNode = new MyStackNode(data, min);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
    return newNode;
  }

  min(): T | undefined {
    return this.top?.min;
  }

  pop(): T | null {
    if (this.top === null) {
      return null
    }
    const data = this.top.data;
    this.top = this.top.next;
    this.size--;
    return data;
  }

  peek(): T | null {
    if (this.top === null) {
      return null
    }
    return this.top.data;
  }

}