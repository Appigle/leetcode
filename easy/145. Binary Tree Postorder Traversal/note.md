## ✅ 1. Problem Understanding

You are given the root of a binary tree. Your task is to return the **postorder traversal** of its nodes’ values.

---

### ✳️ What is Postorder Traversal?

**Traversal order**:

```
1. Traverse left subtree
2. Traverse right subtree
3. Visit the root node
```

---

## 🧪 Examples

### Example 1:

Tree:

```
   1
    \
     2
    /
   3
```

**Postorder**: \[3, 2, 1]

---

## ✅ 2. Algorithm Knowledge

### 1. Recursive Postorder (Easy but not the focus):

```js
const postorderTraversal = (root) => {
  const result = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left); // Left
    dfs(node.right); // Right
    result.push(node.val); // Root
  };
  dfs(root);
  return result;
};
```

### 2. Iterative Postorder Traversal (Required by the follow-up):

There are two common approaches:

#### A. Modified Preorder + Reverse

#### B. True Postorder with Stack and Tracking Last Visited

We'll use **Approach A (efficient and clean)**:

---

## ✅ 3. Iterative Postorder (Modified Preorder + Reverse)

We mimic preorder traversal (root → right → left), then **reverse the result** to get postorder (left → right → root):

```javascript
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
var postorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result.reverse(); // Reverse to get left → right → root
};
```

---

## 🔁 Example Execution

Given:

```js
// Tree: 1 -> null, 2 -> 3
const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: null,
  },
};

console.log(postorderTraversal(root)); // [3, 2, 1]
```

---

## 🧠 Summary

| Approach  | Time Complexity | Space Complexity  | Notes                       |
| --------- | --------------- | ----------------- | --------------------------- |
| Recursive | O(n)            | O(n) (call stack) | Easy but less interviewable |
| Iterative | O(n)            | O(n)              | Required for follow-up      |

---
