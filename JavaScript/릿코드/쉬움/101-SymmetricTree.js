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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const tree = (leftSub, rightSub) => {
    if (leftSub === null && rightSub === null) return true;
    if (leftSub === null || rightSub === null) return false;
    return (
      leftSub.val === rightSub.val &&
      tree(leftSub.right, rightSub.left) &&
      tree(leftSub.left, rightSub.right)
    );
  };

  return root === null || tree(root.left, root.right);
};
