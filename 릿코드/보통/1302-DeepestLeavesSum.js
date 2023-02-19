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
var deepestLeavesSum = function (root) {
  const obj = {};
  let maxLevel = 0;
  const tree = (root, level) => {
    if (!root) return;
    level++;
    tree(root.left, level);
    tree(root.right, level);
    maxLevel = Math.max(level, maxLevel);
    if (!root.left && !root.right) {
      if (obj[level]) obj[level] += root.val;
      else obj[level] = root.val;
    }
    level--;
  };
  tree(root, 0);
  return obj[maxLevel];
};
