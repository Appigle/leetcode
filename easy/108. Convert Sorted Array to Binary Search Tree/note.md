To solve this problem, you need to **convert a sorted array into a height-balanced Binary Search Tree (BST)**.

### 🔍 Problem Insight

A **height-balanced BST** is a binary tree where the **depth of the two subtrees of every node never differs by more than 1**. The best way to ensure this is to always choose the **middle element of the array** (or subarray) as the root — this keeps the tree as balanced as possible.

---

### ✅ Strategy (Recursive Divide and Conquer)

1. **Base case**: If the array is empty, return `null`.
2. **Recursive step**:

   - Pick the **middle element** of the current array (or subarray) as the root.
   - Recursively apply this logic to the **left half** to create the left subtree.
   - Recursively apply it to the **right half** to create the right subtree.

---

### 💡 Code (JavaScript / TypeScript Style)

```javascript
function sortedArrayToBST(nums) {
  // Helper function to build BST recursively
  function buildBST(left, right) {
    if (left > right) return null; // Base case

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = buildBST(left, mid - 1);
    node.right = buildBST(mid + 1, right);

    return node;
  }

  return buildBST(0, nums.length - 1);
}

// Definition for a binary tree node:
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
```

---

### 🔁 Example Walkthrough

#### Input:

```js
nums = [-10, -3, 0, 5, 9];
```

- Middle is `0`, becomes root.
- Left part: `[-10, -3]` → middle is `-10`, then `-3` goes to right of `-10`.
- Right part: `[5, 9]` → middle is `9`, then `5` goes to left of `9`.

Result (one of the valid outputs):

```
       0
     /   \
  -10     9
     \   /
    -3  5
```

---

### ⏱ Time and Space Complexity

- **Time**: `O(n)` — each element is visited once.
- **Space**: `O(log n)` for recursion stack in balanced tree (average case), `O(n)` worst-case if array degenerates.
