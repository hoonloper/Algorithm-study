/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  let answer = 0;
  const tree = (root1, root2) => {
    if (answer) return;
    if (!root1 || !root2) return;
    if (root1 === target) {
      answer = root2;
      return;
    }
    tree(root1.left, root2.left);
    tree(root1.right, root2.right);
  };
  tree(original, cloned);
  return answer;
};
