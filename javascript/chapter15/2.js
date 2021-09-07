function BinarySearchTree() {
  this._root = null;
}

// 시간 복잡도 균형트리 O(log2(n)) 불균형 O(n)
BinarySearchTree.prototype.insert = function (value) {
  var thisNode = { left: null, right: null, value: value };
  if (!this._root) {
    this._root = thisNode;
  } else {
    var currentRoot = this._root;
    while (true) {
      if (currentRoot.value > value) {
        if (currentRoot.left != null) currentRoot = currentRoot.left;
        else {
          currentRoot.left = thisNode;
          break;
        }
      } else if (currentRoot.value < value) {
        if (currentRoot.right != null) currentRoot = currentRoot.right;
        else {
          currentRoot.right = thisNode;
          break;
        }
      } else break;
    }
  }
}
// 시간 복잡도 균형트리 O(log2(n)) 불균형 O(n)
BinarySearchTree.prototype.remove = function (value) {
  return deleteRecursively(this._root, value);

  function deleteRecursively(root, value) {
    if (!root) return null;
    else if (value < root.value) root.left = deleteRecursively(root.left, value);
    else if (value > root.value) root.right = deleteRecursively(root.right, value);
    else {
      if (!root.left && !root.right) return null;
      else if (!root.left) {
        root = root.right;
        return root;
      } else if (!root.right) {
        root = root.left;
        return root;
      } else {
        var temp = findMin(root.right);
        root.value = temp.value;
        root.right = deleteRecursively(root.right, temp.value);
        return root;
      }
    }
  }

  function findMin(root) {
    while (root.left) root = root.left;
    return root;
  }
}

BinarySearchTree.prototype.findNode = function (value) {
  var currentRoot = this._root, found = false;

  while (currentRoot) {
    if (currentRoot.value > value) currentRoot = currentRoot.left;
    else if (currentRoot.value < value) currentRoot = currentRoot.right;
    else {
      found = true;
      break;
    }
  }
  return found;
}

var bst1 = new BinarySearchTree();
bst1.insert(1);
bst1.insert(3);
bst1.insert(2);
console.log(bst1.findNode(3));
console.log(bst1.findNode(5));