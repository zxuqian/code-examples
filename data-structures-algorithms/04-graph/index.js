class Node {
  constructor(value, neighbors = []) {
    this.value = value;
    this.neighbors = neighbors;
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = nodes;
  }
}
