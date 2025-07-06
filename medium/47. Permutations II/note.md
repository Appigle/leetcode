To solve the problem of **generating all unique permutations of an array that may contain duplicates**, we can use **backtracking** with a **used\[] boolean array** and a **sorting + skip duplicates** strategy.

---

## ✅ Key Idea:

When the array contains duplicates, regular permutation logic will produce repeated results. To avoid this:

1. **Sort the input array** so that duplicates are next to each other.
2. **Track used elements** with a boolean array.
3. **Skip duplicates** by checking if:

   - `nums[i] === nums[i - 1]`
   - and `used[i - 1] === false` (means the duplicate on the same level has been skipped)

---

## ✅ Code Implementation (JavaScript):

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b); // Sort to make duplicate detection easier
  const result = [];
  const used = new Array(nums.length).fill(false);

  const backtrack = (path) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // Skip used numbers
      if (used[i]) continue;

      // Skip duplicates
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(nums[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  };

  backtrack([]);
  return result;
};
```

---

## 🔍 Example Trace (Input: `[1,1,2]`):

### Step-by-step:

1. `path: []`
2. Choose `1` (first), used\[0] = true → path: `[1]`
3. Choose `1` (second), used\[1] = true → path: `[1,1]`
4. Choose `2`, used\[2] = true → path: `[1,1,2]` ✅ result
5. Backtrack, try skipping second 1 if first one not used → skip duplicate

Final Result:

```js
[
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1],
];
```

---

## 🧠 Constraints Handling:

- Up to `8! = 40320` permutations if all elements are unique.
- Skipping duplicates avoids unnecessary computation.

---

Let's break down and explain this line of code commonly used in **backtracking problems with duplicate elements**, such as in the **"Unique Permutations"** problem:

```js
if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
```

---

### 🔍 What does this condition do?

This line **skips over duplicate values** _at the same recursive level_ to avoid generating **duplicate permutations**.

---

### 💡 Breakdown of the condition:

1. **`i > 0`**

   - Make sure there is a previous element (`i - 1`) to compare with.
   - Prevents accessing an invalid index.

2. **`nums[i] === nums[i - 1]`**

   - This checks if the current number is a **duplicate** of the one before it.
   - If it's the same as the previous, we need to decide whether to skip it or not.

3. **`!used[i - 1]`**

   - This is the **crucial part**!
   - It ensures that we're skipping **duplicate branches at the same level**.
   - If the **previous duplicate number hasn't been used yet**, it means we're starting a new branch, and choosing this `nums[i]` now would **repeat an already explored branch** — so we skip it.

---

### 🧠 Why `!used[i - 1]` instead of `used[i - 1]`?

- If `used[i - 1] === false`, it means:

  - We are **not continuing** from the previous value in the current recursive path.
  - Choosing `nums[i]` here would **repeat the same branch** as if we had picked `nums[i - 1]`.

Thus, we **skip this duplicate** to avoid redundant work.

---

### ✅ When _not_ to skip

If `used[i - 1] === true`, it means:

- We already picked `nums[i - 1]` earlier in this recursive path.
- It's OK to pick `nums[i]` now — it’s part of a different permutation sequence.

---

### 🖼️ Visual Example

Given sorted input: `[1, 1, 2]`

At the same level, suppose:

- You already explored the path starting with the **first `1`**
- Now you are at the **second `1`** (`i = 1`)
- If `used[0] === false`, you're at a sibling level — so **skip it** to prevent a duplicate permutation.

---

### 🔁 Summary

```js
if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
```

This line means:

> “If this number is a **duplicate** of the previous, and that previous one **wasn't used in this recursive path**, skip this one to avoid generating the same permutation again.”
