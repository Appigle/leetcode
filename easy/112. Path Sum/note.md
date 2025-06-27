finding the minimum depth of a binary tree — we’ll use a Breadth-First Search (BFS) approach.

✅ Why BFS?
The first leaf node we encounter in a level-order traversal (BFS) is the minimum depth, because BFS checks all nodes level by level (i.e., shortest paths first).

This is more efficient than DFS for this problem.

Let's compare **BFS** (Breadth-First Search) and **DFS** (Depth-First Search) for solving the **root-to-leaf path sum** problem.

---

## 🔍 Problem Recap

> Given a binary tree and an integer `targetSum`, return `true` if there exists **any root-to-leaf path** such that the sum of the values along that path equals `targetSum`.

---

## ✅ DFS Solution (Depth-First Search)

### ✅ Code:

```javascript
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  const remaining = targetSum - root.val;
  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};
```

### 🧠 DFS Characteristics:

- Uses **recursion** (or an explicit stack).
- Traverses **deep into each branch first**.
- Efficient for early stopping: returns `true` as soon as it finds a valid path.

---

## 🔁 BFS Solution (Breadth-First Search)

### ✅ Code:

```javascript
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const queue = [{ node: root, sum: root.val }];

  while (queue.length > 0) {
    const { node, sum } = queue.shift();

    // Check if it's a leaf
    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }

    if (node.left) {
      queue.push({ node: node.left, sum: sum + node.left.val });
    }

    if (node.right) {
      queue.push({ node: node.right, sum: sum + node.right.val });
    }
  }

  return false;
};
```

### 🧠 BFS Characteristics:

- Uses a **queue** (FIFO).
- Traverses **level by level**.
- May reach the correct path sooner **if it's on a shallower level**.

---

## 🔍 DFS vs BFS Comparison Table

| Feature              | DFS                                     | BFS                                     |
| -------------------- | --------------------------------------- | --------------------------------------- |
| **Approach**         | Depth-first traversal (recursive/stack) | Level-order traversal (queue)           |
| **Space Complexity** | O(h) where h = tree height (recursion)  | O(w) where w = max width of tree        |
| **Time Complexity**  | O(n) in worst case                      | O(n) in worst case                      |
| **Early Exit**       | ✔️ Fast if valid path is deep           | ✔️ Fast if valid path is shallow        |
| **Good for**         | Checking all paths, elegant recursion   | Balanced trees, early shallow discovery |
| **Drawback**         | Stack overflow for deep trees           | More memory in wide trees               |

---

## ✅ When to Use Which?

| Tree Shape                     | Prefer |
| ------------------------------ | ------ |
| Deep and narrow                | DFS    |
| Shallow and wide               | BFS    |
| Need all paths                 | DFS    |
| Just need shortest/first match | BFS    |

---

## 🧪 Example Tree

```
        5
       / \
      4   8
     /   / \
    11  13  4
   /  \      \
  7    2      1
```

- **DFS path match**: goes down `5→4→11→2` and finds target `22`.
- **BFS path match**: explores `5`, then `4 & 8`, then their children level by level.

---
