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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let sum = 0;
  const bst = (root) => {
    if (!root) {
      return;
    }
    bst(root.right);
    sum += root.val;
    root.val = sum;
    bst(root.left);
  };
  bst(root);

  return root;
};
