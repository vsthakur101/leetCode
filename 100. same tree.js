/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // Base case: if both trees are null, they are identical
  if (p === null && q === null) {
    return true;
  }
  // If one is null and the other is not, they are not identical
  if (p === null || q === null) {
    return false;
  }
  // If the current nodes have different values, they are not identical
  if (p.val !== q.val) {
    return false;
  }

  // Recursively check the left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Create tree 1
let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

// Create tree 2
let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(isSameTree(tree1, tree2)); // Output: true

// Modify tree 2
tree2.right.val = 4;

console.log(isSameTree(tree1, tree2)); // Output: false
