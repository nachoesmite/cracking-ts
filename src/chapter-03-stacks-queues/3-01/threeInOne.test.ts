import { ThreeInOneStack } from "./threeInOne";

const threeInOneStack = new ThreeInOneStack();
threeInOneStack.pushToStack('one', 1);
threeInOneStack.pushToStack('one', 2);
threeInOneStack.pushToStack('one', 3);
threeInOneStack.pushToStack('two', 'A');
threeInOneStack.pushToStack('two', 'B');
threeInOneStack.pushToStack('two', 'C');
threeInOneStack.pushToStack('three', 10.0);
threeInOneStack.pushToStack('three', 20.0);
threeInOneStack.pushToStack('three', 30.0);

describe(`threeInOne array`, () => {
  it('peek correct from all stacks', () => {
    expect(threeInOneStack.peekFromStack("one")).toBe(3);
    expect(threeInOneStack.peekFromStack("two")).toBe("C");
    expect(threeInOneStack.peekFromStack("three")).toBe(30.0);
  });

  it('pop and peek worked from all stacks', () => {
    expect(threeInOneStack.popFromStack("one")).toBe(3);
    expect(threeInOneStack.popFromStack("two")).toBe("C");
    expect(threeInOneStack.popFromStack("three")).toBe(30.0);
    expect(threeInOneStack.peekFromStack("one")).toBe(2);
    expect(threeInOneStack.peekFromStack("two")).toBe("B");
    expect(threeInOneStack.peekFromStack("three")).toBe(20.0);
  });

  it(`push again and test with peek`, () => {
    threeInOneStack.pushToStack('one', 1000);
    threeInOneStack.pushToStack('two', 'Z');
    threeInOneStack.pushToStack('three', 1000000.10);
    expect(threeInOneStack.peekFromStack("one")).toBe(1000);
    expect(threeInOneStack.peekFromStack("two")).toBe("Z");
    expect(threeInOneStack.peekFromStack("three")).toBe(1000000.10);
  })

  it(`empty the stacks`, () => {
    expect(threeInOneStack.popFromStack("one")).toBe(1000);
    expect(threeInOneStack.popFromStack("two")).toBe("Z");
    expect(threeInOneStack.popFromStack("three")).toBe(1000000.10);
    expect(threeInOneStack.popFromStack("one")).toBe(2);
    expect(threeInOneStack.popFromStack("two")).toBe("B");
    expect(threeInOneStack.popFromStack("three")).toBe(20.0);
    expect(threeInOneStack.peekIsEmptyFromStack("one")).toBeFalsy();
    expect(threeInOneStack.peekIsEmptyFromStack("two")).toBeFalsy();
    expect(threeInOneStack.peekIsEmptyFromStack("three")).toBeFalsy();
    expect(threeInOneStack.popFromStack("one")).toBe(1);
    expect(threeInOneStack.popFromStack("two")).toBe("A");
    expect(threeInOneStack.popFromStack("three")).toBe(10.0);
    expect(threeInOneStack.peekIsEmptyFromStack("one")).toBeTruthy();
    expect(threeInOneStack.peekIsEmptyFromStack("two")).toBeTruthy();
    expect(threeInOneStack.peekIsEmptyFromStack("three")).toBeTruthy();
  })
});