To solve this problem of generating all **well-formed parentheses combinations**, we use **backtracking**.

---

## 🔍 Problem Explained:

You're given `n` pairs of parentheses. You must return **all combinations** that are:

- Exactly `n` opening `'('` and `n` closing `')'` parentheses.
- **Valid**, meaning every open bracket must be closed properly (e.g. no `())(` or `(()`).

---

## 🧠 Algorithm Strategy: **Backtracking (DFS)**

At each step, you can:

1. **Add an open bracket** `'('` if you still have one left.
2. **Add a close bracket** `')'` if there are more opens than closes (i.e., to match an existing `'('`).

### Base Case:

When you have used all `n` opens and `n` closes → the current string is valid, add it to the result.

---

## ✅ JavaScript Solution (Clean Backtracking)

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  const backtrack = (current, open, close) => {
    // base case: valid combo formed
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }

    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  };

  backtrack('', 0, 0);
  return result;
};
```

---

## 🔄 Example for `n = 3`

Call Stack / Execution Tree:

```
                 ""
             /       \
           (           )
        /     \         x (invalid: no open before close)
     ((       ()
   /   \      /
 (((  (()    ()(
  |     \     \
((()))  (())(  ()()
        etc...
```

Output:

```js
['((()))', '(()())', '(())()', '()(())', '()()()'];
```

---

## 📦 Time & Space Complexity

- **Time:** Exponential → O(2^(2n)), because each step can branch into 2 paths (open/close).
- **Space:** O(n) for recursion depth, and O(2^n) for the result list.
