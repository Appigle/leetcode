## 🧠 **What is the question asking?**

You're given the **root of a binary tree**, and you need to return an array containing the values of the tree's nodes **in inorder traversal order**.

---

## 🌳 What is **Inorder Traversal**?

Inorder traversal is a method of visiting the nodes in a binary tree in the following order:

**Left → Node → Right**

In other words, for each node:

1. First, visit all the nodes in its **left subtree**
2. Then, **process the current node**
3. Finally, visit all the nodes in its **right subtree**

This is commonly used when you want to **get values in sorted order** from a **binary search tree (BST)**.

---

### 🧾 Example

Let’s take this tree as an example:

```
     1
      \
       2
      /
     3
```

This tree (from `root = [1,null,2,3]`) looks like this:

```
    1
     \
      2
     /
    3
```

### Inorder steps:

- Go to the left of 1 → there’s nothing.
- Visit 1 → ✅ Add 1
- Go to right → node 2

  - Go to left of 2 → node 3

    - Left of 3 → nothing
    - Visit 3 → ✅ Add 3
    - Right of 3 → nothing

  - Visit 2 → ✅ Add 2

### Final output: `[1, 3, 2]`

---

## 🔍 Other Example

### Input: `root = [1,2,3,4,5,null,8,null,null,6,7,9]`

This tree looks like this:

```
             1
           /   \
         2       3
        / \       \
       4   5       8
          / \     /
         6   7   9
```

### Inorder traversal:

- Traverse left subtree of 1 → process 4, 2, 6, 5, 7
- Visit 1
- Traverse right subtree of 1 → process 3, 9, 8

### Final output: `[4,2,6,5,7,1,3,9,8]`

---

## ✅ Your task is:

Given the `root` of a binary tree, **return an array of values in inorder traversal order**.

---

## Constraints

- 0 to 100 nodes
- Each node’s value is between -100 and 100

---

Here are **two common solutions** to perform **inorder traversal** of a binary tree:

---

## ✅ Option 1: **Recursive Solution** (Simple & Intuitive)

```js
var inorderTraversal = function (root) {
  const result = [];

  function traverse(node) {
    if (!node) return;
    traverse(node.left); // 1. Visit left subtree
    result.push(node.val); // 2. Visit current node
    traverse(node.right); // 3. Visit right subtree
  }

  traverse(root);
  return result;
};
```

---

## ✅ Option 2: **Iterative Solution** (Using Stack – No Recursion)

```js
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    // Go as far left as possible
    while (current) {
      stack.push(current);
      current = current.left;
    }
    // Now process the node
    current = stack.pop();
    result.push(current.val);
    // Visit the right subtree
    current = current.right;
  }

  return result;
};
```

---

## 🌳 Example Input Tree

If you want to run this in a test, your tree nodes should look like this:

```js
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Example: root = [1,null,2,3]
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

console.log(inorderTraversal(root)); // Output: [1, 3, 2]
```
