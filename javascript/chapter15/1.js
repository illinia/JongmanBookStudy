function TreeNode(value) {
  this.value = value;
  this.children = [];
}

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

// 선순위 순회
BinaryTree.prototype.traversePreOrder = function () {
  traversePreOrderHelper(this._root);

  function traversePreOrderHelper(node) {
    if (!node) return;
    console.log(node.value);

    traversePreOrderHelper(node.left);
    traversePreOrderHelper(node.right);
  }
}

BinaryTree.prototype.traversePreOrderIterative = function () {
  var nodeStack = [];
  nodeStack.push(this._root);

  while (nodeStack.length) {
    var node = nodeStack.pop();
    console.log(node.value);

    if (node.right) nodeStack.push(node.right);
    if (node.left) nodeStack.push(node.left);
  }
}

// 중순위 순회
BinaryTree.prototype.traverseInOrder = function () {
  traverseInOrderHelper(this._root);

  function traverseInOrderHelper(node) {
    if (!node) return;

    traverseInOrderHelper(node.left);
    console.log(node.value);
    traverseInOrderHelper(node.right);
  }
}

BinaryTree.prototype.traverseInOrderIterative = function () {
  var current = this._root, s = [], done = false;

  while (!done) {
    if (current != null) {
      s.push(current);
      current = current.left;
    } else {
      if (s.length) {
        current = s.pop();
        console.log(current.value);
        current = current.right;
      } else {
        done = true;
      }
    }
  }
}

// 후순위 순회
BinaryTree.prototype.traversePostOrder = function () {
  traversePostOrderHelper(this._root);

  function traversePostOrderHelper(node) {
    if (node.left) traversePostOrderHelper(node.left);
    if (node.right) traversePostOrderHelper(node.right);
    console.log(node.value);
  }
}

BinaryTree.prototype.traversePostOrderIterative = function () {
  var s1 = [], s2 = [];

  s1.push(this._root);

  while (s1.length) {
    var node = s1.pop();
    s2.push(node);

    if (node.left) s1.push(node.left);
    if (node.right) s1.push(node.right);
  }

  while (s2.length) {
    var node = s2.pop();
    console.log(node.value);
  }
}

// 단계우선 순회 BFS
BinaryTree.prototype.traverseLevelOrder = function () {
  var root = this._root, queue = [];

  if (!root) return;
  queue.push(root);

  while (queue.length) {
    var temp = queue.shift();
    console.log(temp.value);

    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }
}
