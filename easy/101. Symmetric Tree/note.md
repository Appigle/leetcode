## 🌳 **Same Tree** vs 🪞 **Mirror Tree (Symmetric Tree)**

These are **two different kinds of binary tree comparisons**:

---

### ✅ 1. **Same Tree** — Exact Match

We check if **two binary trees** are:

- **Structurally identical** (same shape)
- **Have the same values** at corresponding nodes

#### 👉 Example:

```
Tree A          Tree B

    1              1
   / \            / \
  2   3          2   3

✅ isSameTree(TreeA, TreeB) → true
```

#### ❌ Example with different structure:

```
Tree A          Tree B

    1              1
   /                \
  2                  2

❌ isSameTree(TreeA, TreeB) → false
```

---

### ✅ 2. **Mirror Tree (Symmetric)** — Mirror Image of Itself

We check if **one tree is a mirror image of itself**, meaning:

- The **left and right subtrees** are mirrors.
- Mirror structure means:

  - The left child of left = right child of right
  - The right child of left = left child of right

#### 👉 Example:

```
        1
      /   \
     2     2
    / \   / \
   3  4  4  3

✅ isSymmetric(root) → true
```

#### ❌ Asymmetric example:

```
        1
      /   \
     2     2
      \     \
       3     3

❌ isSymmetric(root) → false
```

---

## 🔁 Summary Table:

| Feature                | Same Tree (`isSameTree`)                | Symmetric Tree (`isSymmetric`)          |
| ---------------------- | --------------------------------------- | --------------------------------------- |
| **Comparing**          | Two different trees (`p`, `q`)          | One tree (`root`)                       |
| **Goal**               | Check if trees are **exactly the same** | Check if tree is a **mirror of itself** |
| **Structure**          | Must match exactly                      | Must mirror across center               |
| **Values**             | Must match exactly                      | Must mirror across center               |
| **Function Signature** | `isSameTree(p, q)`                      | `isSymmetric(root)`                     |

---

Let's directly compare the **solution logic** and code for these two problems: ✅ **Same Tree** vs 🪞 **Symmetric Tree**.

---

## 🔁 What's the Difference in Their Solutions?

### 🔹 1. **Same Tree** – `isSameTree(p, q)`

You compare **two different trees** (`p` and `q`) **node by node** in the **same structure** and value:

#### ✅ Code:

```js
var isSameTree = function (p, q) {
  if (!p && !q) return true; // both nodes are null → ok
  if (!p || !q) return false; // only one is null → different
  if (p.val !== q.val) return false; // value mismatch

  // compare both left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

### ✔️ Key points:

- Compare `p.left` with `q.left`
- Compare `p.right` with `q.right`
- Same direction on both sides

---

### 🔹 2. **Symmetric Tree** – `isSymmetric(root)`

You check if the **left and right subtrees of the same tree** are **mirrors**.

That means:

- `left.left` must match `right.right`
- `left.right` must match `right.left`

#### ✅ Code:

```js
var isSymmetric = function (root) {
  if (!root) return true;

  function isMirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    if (t1.val !== t2.val) return false;

    // now, compare mirror branches
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }

  return isMirror(root.left, root.right);
};
```

### ✔️ Key points:

- Compare `left.left` with `right.right`
- Compare `left.right` with `right.left`
- Reverse direction

---

## 📊 Side-by-Side Comparison:

| Feature             | `isSameTree(p, q)`                               | `isSymmetric(root)`                                     |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| Comparing           | Two trees                                        | One tree's left and right subtree                       |
| Base call           | `isSameTree(p, q)`                               | `isSymmetric(root)` → `isMirror(root.left, root.right)` |
| Recursive condition | `isSameTree(p.left, q.left)` + `p.right/q.right` | `isMirror(t1.left, t2.right)` + `t1.right, t2.left`     |
| Direction           | Same-to-same                                     | Mirror (opposite)                                       |

---

## 🔍 Visual Difference:

```
Same Tree                vs          Mirror Tree
-----------                          -----------

    1                                  1
   / \                                / \
  2   3                              2   2
 / \ / \                            / \ / \
4  5 6  7                          3  4 4  3

left.left === right.left       vs  left.left === right.right
```
