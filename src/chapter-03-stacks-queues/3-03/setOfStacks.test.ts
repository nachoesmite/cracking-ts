import { SetOfStacks } from "./setOfStacks"

const setOfStack = new SetOfStacks(2);

describe('test the set of stacks', () => {
  it('create a triple stack', () => {
    setOfStack.push(1);
    setOfStack.push(2);
    setOfStack.push(3);
    setOfStack.push(4);
    setOfStack.push(5);
    setOfStack.push(6);
    setOfStack.push(7);
    setOfStack.push(8);
    expect(setOfStack.peakAt(0)).toBe(2);
    expect(setOfStack.peakAt(1)).toBe(4);
    expect(setOfStack.peakAt(2)).toBe(6);
    expect(setOfStack.peakAt(3)).toBe(8);
  })
  it('removing first two elements of the setOfStacks and validate size and heads', () => {
    expect(setOfStack.pop()).toBe(8);
    expect(setOfStack.pop()).toBe(7);
    expect(setOfStack.peakAt(0)).toBe(2);
    expect(setOfStack.peakAt(1)).toBe(4);
    expect(setOfStack.peakAt(2)).toBe(6);  
    expect(setOfStack.peakAt(3)).toBeNull();
  })
  it('removing from a rand stack and adding new one at head', () => {
    expect(setOfStack.popAt(1)).toBe(4);
    expect(setOfStack.popAt(1)).toBe(3);
    expect(setOfStack.popAt(1)).toBe(6);
    setOfStack.push(100);
    expect(setOfStack.pop()).toBe(100);
  })
})