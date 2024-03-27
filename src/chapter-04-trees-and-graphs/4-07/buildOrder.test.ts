import { GraphProjects, Vertex } from "./buildOrder"

describe(`Build Order Project paths`, () => {
  it(`Solve the exercise sample in the book`, () => {
    
    const graph = GraphProjects.buildFromArray([["a","d"],["f","b"],["b","d"],["f","a"],["d","c"]]);
    graph.addVertex(new Vertex('e'));
    const path = graph. getBuildOrder();
    expect(path).toEqual(["f","e","a","b","d","c"]);
  })
  it(`Circular dependency should return an error`, () => {
    
    const graph = GraphProjects.buildFromArray([["a","d"],["d","a"],["f","b"],["b","d"],["f","a"],["d","c"]]);
    graph.addVertex(new Vertex('e'));
    expect(() => {graph. getBuildOrder()}).toThrow('Cannot find a path, current path is f,e,b');
  })
})