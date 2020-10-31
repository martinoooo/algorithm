/**
 * Given a reference of a node in a connected undirected graph.
    Return a deep copy (clone) of the graph.
    Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

    class Node {
        public int val;
        public List<Node> neighbors;
    }
     
    Test case format:
        For simplicity sake, each node's value is the same as the node's index (1-indexed). 
        For example, the first node with val = 1, the second node with val = 2, and so on. 
        The graph is represented in the test case using an adjacency list.
        Adjacency list is a collection of unordered lists used to represent a finite graph. 
        Each list describes the set of neighbors of a node in the graph.
        The given node will always be the first node with val = 1. 
        You must return the copy of the given node as a reference to the cloned graph.

    Example 1:
        Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
        Output: [[2,4],[1,3],[2,4],[1,3]]
        Explanation: There are 4 nodes in the graph.
            1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
            2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
            3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
            4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
    
    Example 2:
        Input: adjList = [[]]
        Output: [[]]
        Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
    
    Example 3:
        Input: adjList = []
        Output: []
        Explanation: This an empty graph, it does not have any nodes.
 
    Example 4:
        Input: adjList = [[2],[1]]
        Output: [[2],[1]]
     

    Constraints:
        1 <= Node.val <= 100
        Node.val is unique for each node.
        Number of Nodes will not exceed 100.
        There is no repeated edges and no self-loops in the graph.
        The Graph is connected and all nodes can be visited starting from the given node.

    链接：https://leetcode-cn.com/problems/clone-graph
 */

// Definition for a Node.
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return new Node();
  const newNode = new Node(node.val, []);
  const nodes = {
    [node.val]: newNode,
  };

  explore(newNode, node);
  function explore(newn, oldn) {
    if (oldn.explored === true) return;
    oldn.explored = true;
    for (let i = 0; i < oldn.neighbors.length; i++) {
      if (!oldn.neighbors[i].explored) {
        if (nodes[oldn.neighbors[i].val]) {
          nodes[oldn.neighbors[i].val].neighbors.push(newn);
          newn.neighbors.push(nodes[oldn.neighbors[i].val]);
        } else {
          const temp = new Node(oldn.neighbors[i].val, [newn]);
          newn.neighbors.push(temp);
          nodes[oldn.neighbors[i].val] = temp;
        }
      }
    }
    for (let i = 0; i < oldn.neighbors.length; i++) {
      if (!oldn.neighbors[i].explored) {
        explore(newn.neighbors[i], oldn.neighbors[i]);
      }
    }
  }

  return newNode;
};

// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);
// node1.neighbors = [node2, node4];
// node2.neighbors = [node1, node3];
// node3.neighbors = [node2, node4];
// node4.neighbors = [node1, node3];

// console.log(node1);

// console.log(cloneGraph(node1));

// const node5 = new Node(1);
// console.log(cloneGraph(node5));

console.log(cloneGraph([]));
