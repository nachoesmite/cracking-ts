import { Graph, GraphNode } from "./graph";

describe(`Graph Tests`, () => {
  const sampleGraph = Graph.fromArray([["0","1"],["0","4"],["0","5"],["1","3"],["1","4"],["2","1"],["3","2"],["3","4"]]);
  it(`DFS`, () => {
    const visitOrder: string[] = [];
    const visitFunction = (node: GraphNode<string>) => {
      visitOrder.push(node.id);
    }
    sampleGraph.getNode("0").visitDFS(visitFunction);
    expect(visitOrder).toStrictEqual(["0","1","3","2","4","5"]);
  });

  it(`DFS`, () => {
    const visitOrder: string[] = [];
    const visitFunction = (node: GraphNode<string>) => {
      visitOrder.push(node.id);
    }
    sampleGraph.getNode("0").visitBFS(visitFunction);
    expect(visitOrder).toStrictEqual(["0","1","4","5","3","2"]);
  });
})