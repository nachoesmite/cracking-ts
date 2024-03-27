export class CommonAncestorBTree {
  left: CommonAncestorBTree | null;
  right: CommonAncestorBTree | null;
  parent: CommonAncestorBTree | null
  data: number;

  constructor (value: number, left: CommonAncestorBTree | null, right: CommonAncestorBTree | null, parent: CommonAncestorBTree | null) {
    this.data = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

export const getCommonAncestor = (node1: CommonAncestorBTree | null, node2: CommonAncestorBTree | null): CommonAncestorBTree | null => {
  const node1Parents = [];
  while(node1) {
    node1Parents.push(node1);
    node1 = node1.parent;
  }
  while(node2) {
    const matches = node1Parents.filter((node1P) => node1P === node2);
    if (matches.length > 0) {
      return matches[0];
    }
    node2 = node2.parent;
  }
  return null;
}
