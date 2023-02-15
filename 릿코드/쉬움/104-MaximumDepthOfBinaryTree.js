/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let count = 0;
  let max = 0;
  const tree = (root) => {
    if (!root) {
      max = Math.max(max, count);
      return;
    }
    count++;
    tree(root.left);
    tree(root.right);
    count--;
  };
  tree(root);
  return max;
};
