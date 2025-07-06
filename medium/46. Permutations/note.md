To generate all **possible permutations** of an array of distinct integers, we can use **backtracking**, which is a classic approach for such problems.

---

## ✅ **Key Idea**

We build the permutation step by step:

- At each level of recursion, we choose an element that hasn’t been used yet.
- We add it to the current path and continue building.
- Once the path has the same length as the input array, we add it to the result.

---

## 🧠 **Backtracking Template**

Here’s the JavaScript implementation:

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);

  function backtrack(path) {
    if (path.length === nums.length) {
      result.push([...path]); // Push a copy of path
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      path.push(nums[i]);
      used[i] = true;

      backtrack(path);

      path.pop(); // Undo the choice
      used[i] = false; // Mark as unused again
    }
  }

  backtrack([]);
  return result;
};
```

---

## 📊 **Example Trace**

For `nums = [1, 2, 3]`, the recursive tree will look like:

```
[]
├── [1]
│   ├── [1, 2]
│   │   └── [1, 2, 3] ✅
│   └── [1, 3]
│       └── [1, 3, 2] ✅
├── [2]
│   ├── [2, 1]
│   │   └── [2, 1, 3] ✅
│   └── [2, 3]
│       └── [2, 3, 1] ✅
└── [3]
    ├── [3, 1]
    │   └── [3, 1, 2] ✅
    └── [3, 2]
        └── [3, 2, 1] ✅
```

---

## 🧪 Output for Input `[1,2,3]`

```js
[
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];
```

---

## 📌 Summary

| Concept      | Description                             |
| ------------ | --------------------------------------- |
| Technique    | Backtracking                            |
| Base Case    | `path.length === nums.length`           |
| State Space  | All unused elements at each recursion   |
| Time Complex | `O(n!)` since total permutations = `n!` |
