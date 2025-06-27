const sortedArrayToBST = (nums) => {
  if (nums.length === 0) return null;
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

sortedArrayToBST([-10, -3, 0, 5, 9]);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST2 = function (nums) {
  const len = nums.length;

  const buildBst = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = buildBst(left, mid - 1);
    node.right = buildBst(mid + 1, right);
    return node;
  };
  return buildBst(0, len - 1);
};
