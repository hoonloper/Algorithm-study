/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let flag = true;

  const bin = (root1, root2) => {
    if (!root1 && !root2) return;
    if (root1?.val !== root2?.val) {
      flag = false;
      return;
    }
    bin(root1?.left, root2?.left);
    // bin(root1?.val, root2?.val);
    bin(root1?.right, root2?.right);
  };

  bin(p, q);

  return flag;
};
