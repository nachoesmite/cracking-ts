import { MyStack } from "../../dataTypes/stack";

export class SetOfStacks<T> {
  stacks: MyStack<T>[];
  max = 4

  constructor(max: number = 4) {
    this.stacks = [];
    this.max = max;
  }

  popAt(index: number): T | null {
    const stack = this.stacks[index];
    if (stack) {
      const data = stack.pop();
      if (stack.size === 0) {
        this.stacks.splice(index,1)
      }
      return data;
    }
    return null;
  }

  peakAt(index: number): T | null {
    const stack = this.stacks[index];
    if (stack) {
      return stack.peek();
    }
    return null;
  }

  sizeAt(index: number): number | null {
    if (!this.stacks[index]) {
      return null;
    }
    return this.stacks[index].size;
  }

  size(): number {
    return this.stacks.length;
  }

  push(data: T) {
    const stacksSize = this.stacks.length;
    if (stacksSize === 0 || this.stacks[stacksSize -1 ].size === this.max) {
      this.stacks.push(new MyStack(data))
    } else {
      this.stacks[this.stacks.length - 1].push(data);
    }
  }

  pop(): T | null {
    if (this.stacks.length === 0) {
      return null;
    }
    const data = this.stacks[this.stacks.length - 1].pop();
    if (this.stacks[this.stacks.length - 1].size === 0) {
      this.stacks.pop();
    }
    return data;
  }

  cleanEmpty() {
    while (this.stacks[this.stacks.length - 1].size === 0) {
      this.stacks.pop();
    }
  }
} 