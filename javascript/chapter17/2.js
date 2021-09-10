function DirectedGraph() {
  this.edges = {};
}

DirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
}

DirectedGraph.prototype.addEdge = function (origVertex, destVertex, weight) {
  if (weight === undefined) weight = 0;
  this.edges[origVertex][destVertex] = weight;
}

DirectedGraph.prototype.removeEdge = function (origVertex, destVertex) {
  if (this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined) {
    delete this.edges[origVertex][destVertex];
  }
}

DirectedGraph.prototype.removeVertex = function (vertex) {
  for (let adjacentVertex in this.edges[vertex]) {
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.edges[vertex];
}

DirectedGraph.prototype.traverseBFS = function (vertex, fn) {
  let queue = [], visited = {};

  queue.push(vertex);

  while (queue.length) {
    vertex = queue.shift();
    if (!visited[vertex]) {
      visited[vertex] = true;
      fn(vertex);
      for (let adjacentVertex in this.edges[vertex]) {
        queue.push(adjacentVertex);
      }
    }
  }
}

DirectedGraph.prototype.traverseDFS = function (vertex, fn) {
  var visited = {};
  this._traverseDFS(vertex, visited, fn);
}

DirectedGraph.prototype._traverseDFS = function (vertex, visited, fn) {
  visited[vertex] = true;
  fn(vertex);
  for (var adjacentVertex in this.edges[vertex]) {
    if (!visited[adjacentVertex]) {
      this._traverseDFS(adjacentVertex, visited, fn);
    }
  }
}

function _isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {
  var minimumDistance = Infinity, nodeWithMinimumDistance = null;

  for (let node in Q) {
    if (dist[node] <= minimumDistance) {
      minimumDistance = dist[node];
      nodeWithMinimumDistance = node;
    }
  }
  return nodeWithMinimumDistance;
}

DirectedGraph.prototype.Dijkstra = function (source) {
  var Q = {}, dist = {};
  for (let vertex in this.edges) {
    dist[vertex] = Infinity;
    Q[vertex] = this.edges[vertex];
  }
  dist[source] = 0;

  while (!_isEmpty(Q)) {
    var u = _extractMin(Q, dist);
    delete Q[u];

    for (let neighbor in this.edges[u]) {
      var alt = dist[u] + this.edges[u][neighbor];

      if (alt < dist[neighbor]) {
        dist[neighbor] = alt;
      }
    }
  }
  return dist;
}

DirectedGraph.prototype.topologicalSortUtil = function (v, visited, stack) {
  visited.add(v);

  for (let item in this.edges[v]) {
    if (visited.has(item) == false) {
      this.topologicalSortUtil(item, visited, stack);
    }
  }
  stack.unshift(v);
}

DirectedGraph.prototype.topologicalSort = function () {
  let visited = new Set(), stack = [];

  for (let item in this.edges) {
    if (visited.has(item) == false) {
      this.topologicalSortUtil(item, visited, stack);
    }
  }
  return stack;
}

// var digraph1 = new DirectedGraph();
// digraph1.addVertex('A');
// digraph1.addVertex('B');
// digraph1.addVertex('C');
// digraph1.addVertex('D');
// digraph1.addEdge('A', 'B', 1)
// digraph1.addEdge('B', 'C', 1)
// digraph1.addEdge('C', 'A', 1)
// digraph1.addEdge('A', 'D', 1)
// console.log(digraph1)

// digraph1.traverseBFS('B', vertex => console.log(vertex));
// console.log(digraph1.Dijkstra('A'))

var g = new DirectedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('B', 'A');
g.addEdge('D', 'C');
g.addEdge('D', 'B');
g.addEdge('A', 'F');
g.addEdge('E', 'C');
g.addEdge('E', 'F');

var topologicalOrder = g.topologicalSort();
console.log(g);
console.log(topologicalOrder)