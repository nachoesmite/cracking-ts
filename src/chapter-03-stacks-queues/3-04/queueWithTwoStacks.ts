import { MyStack } from "../../dataTypes/stack"

export class MyQueueWithStack<T> {
  queue: MyStack<T>

  constructor() {
    this.queue = new MyStack();
  }

  enqueue(data: T) {
    const temp: MyStack<T> = new MyStack();
    temp.push(data);

    const inverterStack: MyStack<T> = new MyStack();

    while (this.queue.peek()) {
      inverterStack.push(this.queue.pop()!);
    }

    while (inverterStack.peek()) {
      temp.push(inverterStack.pop()!);
    }    
    
    this.queue = temp;
  }

  dequeue(): T | null{
    const data = this.queue.pop();
    if (data === null) {
      return null;
    }
    return data;
  }

  peek(): T | null {
    return this.queue.peek();
  }
}

