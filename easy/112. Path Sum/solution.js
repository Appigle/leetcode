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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  // Queue stores pairs: { node, currentSum }
  const queue = [{ node: root, sum: root.val }];

  while (queue.length > 0) {
    const { node, sum } = queue.shift();

    // Check if it's a leaf and the sum matches
    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }

    // Push left and right children with updated sums
    if (node.left) {
      queue.push({ node: node.left, sum: sum + node.left.val });
    }

    if (node.right) {
      queue.push({ node: node.right, sum: sum + node.right.val });
    }
  }

  return false;
};
hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22);
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum2 = function (root, targetSum) {
  if (!root) return false;
  const dfs = (node, target) => {
    if (!node) return false;
    if (!node.left && !node.right) {
      return node.val === target;
    }
    const remain = target - node.val;
    return dfs(node.left, remain) || dfs(node.right, remain);
  };
  return dfs(root, targetSum);
};
