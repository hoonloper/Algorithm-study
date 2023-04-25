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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const tree = (root) => {
    if (!root) return;
    if (low <= root.val && root.val <= high) sum += root.val;
    tree(root.left);
    tree(root.right);
  };
  tree(root);
  return sum;
};
