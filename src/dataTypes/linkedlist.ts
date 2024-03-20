export class Node<T> {
  next: Node<T> | null;
  data: T;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: Node<T> | null;

  constructor(data?: T) {
    if (!data) {
      this.head = null;
    } else {
      this.head = new Node(data);
    }
  }

  appendToTail(data: T): Node<T> {
    if (this.head === null) {
      this.head = new Node(data);
      return this.head;
    }

    let current: Node<T> = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = new Node(data);    
    return current.next;
  }

  appendNodeToTail(node: Node<T>): Node<T> {
    if (this.head === null) {
      this.head = node;
      return this.head;
    }

    let current: Node<T> = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;    
    return current.next;
  }

  remove(index: number) {
    if (this.head === null) {
      return;
    } else if (index === 0 && this.head.next === null) {
      this.head = null;
      return;
    } else if (index < 0) {
      return;
    }

    let prevNode: Node<T> | null = null;
    let current: Node<T> | null = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index) {
        if (prevNode === null) {
          this.head = current.next;
          return;
        } else {
          prevNode.next = current.next;
          return;
        }
      }
      prevNode = current;
      current = current.next;
      currentIndex++;
    }
    return this;
  }

  traverse(func: (node: Node<T>) => unknown, checkStop = false) {
    if (!this.head) {
      return;
    }
    let current: Node<T> | null =  this.head;

    while (current) {
      const cont = func(current);
      if (checkStop && !cont) {
        return;
      }
      current = current.next;
    }   
  }



  toArray(): T[] {
    const result: T[] = [];
    this.traverse((node) => {
      result.push(node.data);
    });
    return result;
  }
  
  static fromArray<T>(dataArr: T[]): LinkedList<T> {
    const ll = dataArr.reduce((ll, current) => {
      ll.appendToTail(current);
      return ll;
    }, new LinkedList<T>());
    return ll;
  }
}
