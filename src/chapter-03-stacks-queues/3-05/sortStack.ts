import { MyStack } from "../../dataTypes/stack"

export const sortStack = <T>(stack: MyStack<T>): MyStack<T> => {
  const temp: MyStack<T> = new MyStack();
  if (stack.size === 0) {
    return temp;
  }
  const size = stack.size;
  
  while (temp.size !== size) {
    const poped = stack.pop();
    let done = false;
    while(!done) {
      const tempPeek = temp.peek();
      if (!tempPeek || tempPeek! >= poped!) {
        temp.push(poped!);
        done = true;
      } else {
        stack.push(temp.pop()!)
      }
    }
  }

  return temp;
}






