import { MyQueueWithStack } from "./queueWithTwoStacks";

const queueWithStacks = new MyQueueWithStack();

describe('hello', () => {
  it('add one item and verify order', () => {
    queueWithStacks.enqueue(1);
    expect(queueWithStacks.dequeue()).toBe(1);
  })

  it('add two items and verify order', () => {
    queueWithStacks.enqueue(1);
    queueWithStacks.enqueue(2);
    expect(queueWithStacks.dequeue()).toBe(1);
    expect(queueWithStacks.dequeue()).toBe(2);
  })

  it('add 5 items and verify order', () => {
    queueWithStacks.enqueue(1);
    queueWithStacks.enqueue(2);
    queueWithStacks.enqueue(3);
    queueWithStacks.enqueue(4);
    queueWithStacks.enqueue(5);
    expect(queueWithStacks.dequeue()).toBe(1);
    expect(queueWithStacks.dequeue()).toBe(2);
    expect(queueWithStacks.dequeue()).toBe(3);
    expect(queueWithStacks.dequeue()).toBe(4);
    expect(queueWithStacks.dequeue()).toBe(5);
  })
});