class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjMatrix = [];

    // Initialize the adjacency matrix
    for (let i = 0; i < numVertices; i++) {
      this.adjMatrix[i] = [];
      for (let j = 0; j < numVertices; j++) {
        this.adjMatrix[i][j] = 0;
      }
    }
  }

  addEdge(source, destination) {
    // Add an edge between source and destination
    if (
      source >= 0 &&
      source < this.numVertices &&
      destination >= 0 &&
      destination < this.numVertices
    ) {
      this.adjMatrix[source][destination] = 1;
      this.adjMatrix[destination][source] = 1;
    }
  }

  removeEdge(source, destination) {
    // Remove the edge between source and destination
    if (
      source >= 0 &&
      source < this.numVertices &&
      destination >= 0 &&
      destination < this.numVertices
    ) {
      this.adjMatrix[source][destination] = 0;
      this.adjMatrix[destination][source] = 0;
    }
  }

  hasEdge(source, destination) {
    // Check if there is an edge between source and destination
    if (
      source >= 0 &&
      source < this.numVertices &&
      destination >= 0 &&
      destination < this.numVertices
    ) {
      return this.adjMatrix[source][destination] === 1;
    }
    return false;
  }

  print() {
    // Print the adjacency matrix
    for (let i = 0; i < this.numVertices; i++) {
      let row = "";
      for (let j = 0; j < this.numVertices; j++) {
        row += this.adjMatrix[i][j] + " ";
      }
      console.log(row);
    }
  }
}

// Example usage
const graph = new Graph(4); // Create a graph with 4 vertices

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

graph.print();

console.log(graph.hasEdge(1, 2)); // Output: true
console.log(graph.hasEdge(0, 3)); // Output: false
