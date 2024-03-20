// define how would you use a signgle array to impmenet 3 stacks

export class ThreeInOneStack<T> {
  stack: (T | null)[];
  first: number;
  second: number;
  third: number;


  constructor() {
    this.stack = [null, null, null];
    this.first = 0;
    this.second = 1;
    this.third = 2;
  }

  pushToStack(which: 'one' | 'two' | 'three', value: T) {
    switch (which) {
      case 'one': 
        this.stack.splice(this.first, 0, value);
        this.second++;
        this.third++;
        break;
      case 'two':
        this.stack.splice(this.second, 0, value);
        this.third++;
        break;
      case 'three':
        this.stack.splice(this.third, 0, value);
        break;
    }
  }

  popFromStack(which: 'one' | 'two' | 'three'): T | null {
    let data = null;
    switch (which) {
      case 'one': 
        data = this.stack[this.first];
        if (data !== null) {
          this.stack.splice(this.first,1);
          this.second--;
          this.third--;
        }
        break;
      case 'two':
        data = this.stack[this.second];
        if (data !== null) {
          this.stack.splice(this.second,1);
          this.third--;
        }
        break;
      case 'three':
        data = this.stack[this.third];
        if (data !== null) {
          this.stack.splice(this.third,1);
        }
        break;
    }
    return data;
  }

  peekFromStack(which: 'one' | 'two' | 'three'): T | null {
    const index = which === 'one' ? this.first : which === 'two' ? this.second : this.third;

    return this.stack[index]; 
  }

  peekIsEmptyFromStack(which: 'one' | 'two' | 'three'): boolean {
    const index = which === 'one' ? this.first : which === 'two' ? this.second : this.third;

    return this.stack[index] === null; 
  }
}