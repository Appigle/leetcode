const preorderTraversal = (root) => {
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

const preorderTraversal2 = (root) => {
  const dfs = (node) => {
    if (!node) return;
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return result;
};

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
var preorderTraversal3 = function (root) {
  const result = [];
  const dfs = (node) => {
    if (!node) return;
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return result;
};
