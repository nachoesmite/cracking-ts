import { MyStack } from "../../dataTypes/stack"
import { sortStack } from "./sortStack";

describe('sort stack', () => {
  it('it sort a simple stack', () => {
    const stack = new MyStack();
    stack.push(3);
    stack.push(2);
    stack.push(4);
    const sortedStack = sortStack(stack);
    expect(sortedStack.pop()).toBe(2);
    expect(sortedStack.pop()).toBe(3);
    expect(sortedStack.pop()).toBe(4);
  })
})