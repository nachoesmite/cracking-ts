export class Graph<T> {
  nodes: {[key: string] : GraphNode<T>}

  constructor() {
    this.nodes = {};
  }

  getNode(id: string) {
    return this.nodes[id];
  }

  static fromArray(edges: [string,string][]) {
    const newGraph = new Graph<string>();
    for (const edge of edges) {
      const [source, target] = edge;
      if (!newGraph.nodes[source]) {
        newGraph.nodes[source] = new GraphNode(source,source);
      }
      if (!newGraph.nodes[target]) {
        newGraph.nodes[target] = new GraphNode(target,target);
      }
      const newEdge = new Edge(newGraph.nodes[target]);
      newGraph.nodes[source].edges.push(newEdge);
    }
    return newGraph;
  }
  
  addGraphNode(id: string, data: T) {
    const node = new GraphNode(id, data);
    this.nodes[node.id] = node;
  }


  addGraphEdge(source: string, target: string, cost: number = 1) {
    const nodeTarget = this.nodes[target];
    this.nodes[source].edges.push(new Edge(nodeTarget, cost));
  }
}

export class GraphNode<T> {
  id: string;
  data: T;
  edges:Edge<T>[]

  constructor(id: string, data: T, edges: Edge<T> [] = []) {
    this.id = id;
    this.data = data;
    this.edges = edges;
  }

  addEdge(node: GraphNode<T>, cost: number = 1) {
    const edge = new Edge(node,cost);
    this.edges.push(edge);
  }

  visitDFS(func: (node: GraphNode<T>) => unknown = (node: GraphNode<T>) => { console.log(node.id)}, shouldStop: boolean = false) {
    
    this._visitDFS(this, func, new Set<GraphNode<T>>(), shouldStop);
  }

  _visitDFS(node: GraphNode<T>, func: (node: GraphNode<T>) => unknown, visited: Set<GraphNode<T>>, shouldStop: boolean = false ) {
    if (visited.has(node)) {
      return;
    }
    visited.add(node);
    const result = func(node);
    if (shouldStop && result) {
      return;
    }
    for (const adjNodEdjes of node.edges) {
      this._visitDFS(adjNodEdjes.node, func, visited, shouldStop);
    }
    
  }

  visitBFS(func: (node: GraphNode<T>) => unknown, shouldStop: boolean = false ) {
    // implementing using a queue (push/pop and shift array)
    const visitQueue: GraphNode<T>[] = [];
    const visited = new Set<string>();
    visited.add(this.id);
    visitQueue.push(this);

    while(visitQueue.length > 0) {
      const node = visitQueue.shift()!;
      const result = func(node);
      if (shouldStop && result) {
        return;
      }
      for (const edge of node.edges) {
        if (!visited.has(edge.node.id)) {
          visited.add(edge.node.id);
          visitQueue.push(edge.node);
        }
      }
    }
  }

}

export class Edge<T> {
  cost: number;
  node: GraphNode<T>;

  constructor(node: GraphNode<T>, cost: number = 1) {
    this.cost = cost;
    this.node = node;
  }
}
