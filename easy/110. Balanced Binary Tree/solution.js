const isBalanced = (root) => {
  if (!root) return true;
  const height = (node) => {
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  };
  return Math.abs(height(root.left) - height(root.right)) <= 1;
};

isBalanced([3, 9, 20, null, null, 15, 7]);

const isBalanced2 = (root) => {
  if (!root) return true;
  const height = (node) => {
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  };
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (Math.abs(height(node.left) - height(node.right)) > 1) return false;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return true;
};

isBalanced2([3, 9, 20, null, null, 15, 7]);
