import { BinaryTree } from "../../dataTypes/tree";

class LLNode {
  value: number;
  next: LLNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LLNode | null;
  
  constructor() {
    this.head = null;
  }

  toArray(): number[] {
    const result = [];
    if (this.head !== null) {
      let p1: LLNode | null = this.head;
      while(p1) {
        result.push(p1.value);
        p1 = p1.next;
      }
    }
    return result;
  }

  add(value: number) {
    const node = new LLNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      let p1 = this.head;
      while(p1.next) {
        p1 = p1.next;
      }
      p1.next = node;
    }
  }
}


export const getDepths = (bt: BinaryTree<number>, acc: LinkedList[] = [], depth: number = 0): LinkedList[] => {
  if (bt.left) {
    getDepths(bt.left, acc, depth + 1);
  }

  // In order
  if (!acc[depth]) {
    acc[depth] =  new LinkedList();
  }
  acc[depth].add(bt.value);
  
  if (bt.right) {
    getDepths(bt.right, acc, depth + 1);
  }

  return acc;
}



