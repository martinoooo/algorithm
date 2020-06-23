function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

class BinaryTree {
  constructor() {
    this.tree = null;
  }

  insert(key) {
    const node = new Node(key);
    if (!this.tree) {
      this.tree = node;
    } else {
      insertTree(this.tree, node);
    }

    function insertTree(tree, node) {
      if (tree.key < node.key) {
        if (tree.right) {
          insertTree(tree.right, node);
        } else {
          tree.right = node;
        }
      } else {
        if (tree.left) {
          insertTree(tree.left, node);
        } else {
          tree.left = node;
        }
      }
    }
  }

  preOrderTraverse(callback) {
    // preOrderTraverse(this.tree, callback);
    preOrderTraverse2(this.tree, callback);

    function preOrderTraverse(node, callback) {
      if (node) {
        callback(node.key);
        preOrderTraverse(node.left, callback);
        preOrderTraverse(node.right, callback);
      }
    }

    function preOrderTraverse2(node, callback) {
      const stack = [];
      stack.push(node);
      while (stack.length) {
        const n = stack.pop();
        callback(n.key);
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
      }
    }
  }

  inOrderTraverse(callback) {
    inOrderTraverse(this.tree, callback);

    function inOrderTraverse(node, callback) {
      if (node) {
        inOrderTraverse(node.left, callback);
        callback(node.key);
        inOrderTraverse(node.right, callback);
      }
    }
  }

  postOrderTraverse(callback) {
    postOrderTraverse(this.tree, callback);

    function postOrderTraverse(node, callback) {
      if (node) {
        postOrderTraverse(node.left, callback);
        postOrderTraverse(node.right, callback);
        callback(node.key);
      }
    }
  }

  BFS(callback) {
    const stack = [this.tree];
    let count = 0;
    bfs();

    function bfs() {
      const node = stack[count];
      if (node) {
        callback(node.key);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
        count++;
        bfs();
      }
    }
  }
}

var nodeArr = [8, 3, 10, 1, 6, 14, 4, 7, 13];
//           8
//         /  \
//        3    10
//       / \    \
//      1   6    14
//         / \   /
//        4  7  13

var binaryTree = new BinaryTree();
nodeArr.forEach(function (key) {
  binaryTree.insert(key);
});
// console.log(binaryTree.tree);
binaryTree.BFS(console.log);
