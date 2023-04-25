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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const answer = [];
  function bin(root) {
    if (!root) return;
    bin(root.left);
    answer.push(root.val);
    bin(root.right);
  }
  bin(root);
  return answer;
};
