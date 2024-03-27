export class Vertex {
  id: string;
  dependsOn: Map<string, Vertex>;

  constructor(id: string) {
    this.id = id;
    this.dependsOn = new Map();
  }

  addDependency(vertexFrom: Vertex) {
    this.dependsOn.set(vertexFrom.id, vertexFrom);
  }

  hasDependencies() {
    return this.dependsOn.size > 0;
  }
}

export class GraphProjects {
  nodes: {[key: string]: Vertex}

  constructor() {
    this.nodes = {};
  }

  getVertexWithoutDependencies(): Vertex[] {
    const nodes: Vertex[] = Object.values(this.nodes);
    
    return nodes.filter((node) => node.dependsOn.size === 0);
  }

  getVertexWithSolvedDependenciesToBeExecuted(alreadyExecuted: Map<string, boolean>): Vertex[] {
    const canBeExecutedArray: Vertex[] = [];

    for (const node of Object.values(this.nodes)) {
      if (alreadyExecuted.get(node.id)) {
        continue;
      }
      let canBeExecuted = true;
      for (const dependency of node.dependsOn.values()) {
        if (!alreadyExecuted.get(dependency.id)) {
          canBeExecuted = false;
          //If I found one dependency that is not fullfiled :wave: 
          break;
        }
      }
      if (canBeExecuted) {
        canBeExecutedArray.push(node);
      }
    }
    return canBeExecutedArray;
  }

  addVertex(vertex: Vertex) {
    this.nodes[vertex.id] = vertex;
  }

  size() {
    return Object.keys(this.nodes).length;
  }

  static buildFromArray(graphBuilder: [string,string][]): GraphProjects {
    const graph = new GraphProjects();
    for (const [v1, v2] of graphBuilder) {
      if (!graph.nodes[v1]) {
        graph.nodes[v1] = new Vertex(v1);
      }
      if (!graph.nodes[v2]) {
        graph.nodes[v2] = new Vertex(v2);
      }

      graph.nodes[v2].addDependency(graph.nodes[v1]);
    }
    return graph;
  }

  getBuildOrder(): string[] {
    const vertexWithoutDependencies = this.getVertexWithoutDependencies();
    const path = [];
    const visited: Map<string, boolean> = new Map();
    for (const vertex of vertexWithoutDependencies) {
      path.push(vertex.id);
      visited.set(vertex.id, true);
    }
    while (path.length < Object.keys(this.nodes).length) {
      const nodesThatCanBeExecuted = this.getVertexWithSolvedDependenciesToBeExecuted(visited);
      if (nodesThatCanBeExecuted.length === 0) {
        throw Error(`Cannot find a path, current path is ${path}`)
      }
      for (const vertex of nodesThatCanBeExecuted) {
        path.push(vertex.id);
        visited.set(vertex.id, true);
      }
    }

    return path;

  }
}



