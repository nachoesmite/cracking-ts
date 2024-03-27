import { GraphNode } from "../../dataTypes/graph"

export const isRouteBetween = (nodeA: GraphNode<string>, nodeB: GraphNode<string>): boolean => {
  let found = false;
  
  const visit = (node: GraphNode<string>) => {
    if (node.id === nodeB.id) {
      found = true;
      return true;
    }
    return false;
  }

  nodeA.visitDFS(visit, true);
  return found;
}