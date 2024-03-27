export class BTree {

  left: BTree | null;
  right: BTree | null;
  data: number;
  size: number;

  constructor(value: number, left: BTree | null = null, right: BTree | null = null) {
    this.data = value;
    this.left = left;
    this.right = right;
    this.size = 1;
  }


  insert(value: number): BTree {
    if (value <= this.data) {
      // left 
      if (this.left === null) {
        this.left = new BTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BTree(value);
      } else {
        this.right.insert(value);
      }
    }
    this.size++;
    return this;
  }

  findWithoutOrder(searchNodeValue: number): BTree | null {
    // this is in this way just in case you don't use the insert method
    if (this.data === searchNodeValue) {
      return this;
    }
    if (this.left != null) {
      const ret = this.left.findWithoutOrder(searchNodeValue);
      if (ret) {
        return ret;
      }
    }
    if (this.right != null) {
      const ret = this.right.findWithoutOrder(searchNodeValue);
      if (ret) {
        return ret;
      }
    }
    return null;
  }

  find(searchNodeValue: number): BTree | null {
    // this is in this way just in case you don't use the insert method
    if (this.data === searchNodeValue) {
      return this;
    }
    if (searchNodeValue < this.data) {
      return this.left === null ? null : this.left.find(searchNodeValue);
    } else {
      return this.right === null ? null : this.right.find(searchNodeValue);
    }
  }

  getRandomNode(index?: number): BTree {
    const indexToRetrieve = index ?? Math.ceil(Math.random() * this.size) - 1;
    const leftSize = this.left === null ? 0 : this.left.size;
    if (indexToRetrieve < leftSize) {
      return this.left!.getRandomNode(indexToRetrieve);
    } else if (indexToRetrieve > leftSize) {
      return this.right!.getRandomNode(indexToRetrieve  - leftSize - 1);
    } else {
      return this;
    }
  }
}