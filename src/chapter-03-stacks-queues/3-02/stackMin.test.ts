import { MyStack } from "../../dataTypes/stack";

describe('stack Min in O(1) / constant', () => {
  const stack = new MyStack();

  it('test build the stack and check mins', () => {
    stack.push(5);
    expect(stack.min()).toBe(5);
    stack.push(2);
    expect(stack.min()).toBe(2);
    stack.push(9);
    expect(stack.min()).toBe(2);
    stack.push(1);
    expect(stack.min()).toBe(1);
    stack.push(12);
    expect(stack.min()).toBe(1);
    stack.push(8);
    expect(stack.min()).toBe(1);
  });

  it('test remove items from the stack and check mins', () => {
    expect(stack.pop()).toBe(8);
    expect(stack.min()).toBe(1);
    expect(stack.pop()).toBe(12);
    expect(stack.min()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.min()).toBe(2);
    expect(stack.pop()).toBe(9);
    expect(stack.min()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.min()).toBe(5);
    expect(stack.pop()).toBe(5);
    expect(stack.isEmpty()).toBeTruthy();
  });
});