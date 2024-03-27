import { Graph } from "../../dataTypes/graph";
import { isRouteBetween } from "./routeBtwNodes";

describe(`Found if there is a path between A and B`, () => {
  const sampleGraph = Graph.fromArray([["0","1"],["0","4"],["0","5"],["1","3"],["1","4"],["2","1"],["3","2"],["3","4"]]);

  it(`returns true if there is a path`, () => {
    expect(isRouteBetween(sampleGraph.getNode("0"), sampleGraph.getNode("3"))).toBeTruthy();
  });
  it(`returns false if there is no path`, () => {
    expect(isRouteBetween(sampleGraph.getNode("1"), sampleGraph.getNode("5"))).toBeFalsy();
  });
});