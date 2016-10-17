'use strict'

const Graph = function() {
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this[node];
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let fromEdges = this[fromNode];
  for (var i = 0; i < fromEdges.length; i++) {
    let edge = fromEdges[i];
    if (edge === toNode) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode === toNode) {
    return;
  }
  this[fromNode].push(toNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (fromNode === toNode) {
    return;
  }
  let fromEdges = this[fromNode];
  for (let i = 0; i < fromEdges.length; i++) {
    let edge = fromEdges[i];
    if (edge === toNode) {
      fromEdges.splice(i - 1, 1);
      break;
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this) {
    if (!isNaN(Number(key))) {
      cb(Number(key));
    };
  }
};

module.exports = { Graph: Graph };