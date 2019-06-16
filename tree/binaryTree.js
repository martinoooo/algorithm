function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.oRoot = null;
  // 插入
  this.insert = function(key) {
    var newNode = new Node(key);
    if (!(this.oRoot === null)) {
      insertNode(this.oRoot, newNode);
    } else {
      this.oRoot = newNode;
    }

    function insertNode(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  };

  /* 遍历 */
  // 深度遍历（Depth-First Search，DFS）
  // 前序遍历 ---> 先输出节点的值，再递归遍历左右子树
  // 复制一个已有的二叉树结构，性能是最高的
  this.preOrderTraverse = function(callback) {
    preOrderTraverse(this.oRoot, callback);
    preOrderTraverse2(this.oRoot, callback);

    // 递归
    function preOrderTraverse(node, callback) {
      if (node) {
        callback(node.key);
        preOrderTraverse(node.left, callback);
        preOrderTraverse(node.right, callback);
      }
    }

    // 非递归
    function preOrderTraverse2(nodes, callback) {
      let result = [];
      let stack = [];
      stack.push(nodes);
      // 直到栈中的数据为空
      while (stack.length) {
        let node = stack.pop(); // 取的是栈中最后一个
        callback(node.key);
        if (node.right) stack.push(node.right); // 先压入右子树
        if (node.left) stack.push(node.left); // 后压入左子树
      }
    }
  };
  // 中序遍历 ---> 先递归遍历左子树, 再输出节点的值，
  // 用于排序一个数组，从小到大升序排
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(this.oRoot, callback);

    function inOrderTraverseNode(node, callback) {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    }
  };
  // 后续遍历 ---> 先递归遍历右子树，再递归遍历左子树, 再输出节点的值
  // 用于操作系统和文件系统的遍历上
  this.postOrderTraverse = function(callback) {
    postOrderTraverse(this.oRoot, callback);

    function postOrderTraverse(node, callback) {
      if (node !== null) {
        postOrderTraverse(node.left, callback);
        postOrderTraverse(node.right, callback);
        callback(node.key);
      }
    }
  };

  // 广度遍历（Breadth-First Search， BFS）
  this.BFS = function(callback) {
    let stack = [this.oRoot]; // 先将要遍历的树压入栈
    let count = 0; // 用来记录执行到第一层
    bfs();
    bfs2(this.oRoot);

    function bfs() {
      let node = stack[count];
      if (node) {
        callback(node.key);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
        count++;
        bfs();
      }
    }

    function bfs2(node) {
      let result = [];
      let queue = [];
      queue.push(node);
      let pointer = 0;
      while (pointer < queue.length) {
        let node = queue[pointer++]; // 这里不使用 shift 方法（复杂度高），用一个指针代替; 取出一个值之后，pointer加1
        callback(node.key);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
      return result;
    }
  };

  /* 查找 */
  // 查找最小值
  this.findMinNode = (node = this.oRoot) => {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };
  // 查找最大值
  this.findMaxNode = () => {
    let node = this.oRoot;
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };
  // 查找特定值
  this.findNode = key => {
    return searchNode(this.oRoot, key);

    function searchNode(node, key) {
      if (node === null) {
        return false;
      }
      if (key < node.key) {
        return searchNode(node.left, key);
      } else if (key > node.key) {
        return searchNode(node.right, key);
      } else {
        return true;
      }
    }
  };

  /* 删除 */
  this.removeNode = key => {
    const removeNode = (node, key) => {
      if (node === null) {
        return null;
      }
      if (key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
      } else {
        // 为叶子节点，没有左右分支，直接删除该节点
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        // 如果有只一个分支，则赋值为自己的子节点
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        // 如果有两个分支，则找到右边节点的最小值，赋值为该最小值，然后右边节点删除掉该值
        let minNodeKey = this.findMinNode(node.right);
        node.key = minNodeKey;
        node.right = removeNode(node.right, minNodeKey);
        return node;
      }
    };
    removeNode(this.oRoot, key);
  };
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
nodeArr.forEach(function(key) {
  binaryTree.insert(key);
});
binaryTree.BFS(console.log);
