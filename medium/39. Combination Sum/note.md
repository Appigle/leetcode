### 🔍 Problem Breakdown

You are given:

- A list of **distinct integers** `candidates`.
- A `target` sum.

You must:

- Find all **unique combinations** of numbers from `candidates` that sum up to `target`.
- You **can use the same number unlimited times** in each combination.
- The solution must **avoid duplicates**, i.e., `[2,2,3]` is the same as `[3,2,2]`, so you must maintain order or restrict choices to avoid repeats.

---

### ✅ Backtracking Approach

We use **DFS with pruning**:

1. Start from an index `start` to avoid permutations.
2. Subtract from `target` as you add numbers.
3. If `target === 0`, you found a valid combination.
4. If `target < 0`, backtrack (no solution).
5. Loop through candidates starting from `start` to allow reuse of elements.

---

### ✅ JavaScript Implementation

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(start, path, sum) {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]); // i, not i+1, since we can reuse
      path.pop(); // backtrack
    }
  }

  backtrack(0, [], 0);
  return result;
};
```

---

### 🧪 Examples

```js
console.log(combinationSum([2, 3, 6, 7], 7));
// Output: [[2,2,3], [7]]

console.log(combinationSum([2, 3, 5], 8));
// Output: [[2,2,2,2],[2,3,3],[3,5]]

console.log(combinationSum([2], 1));
// Output: []
```

---

### 🧠 Time Complexity (Worst Case):

- Exponential: O(2^T) where T is the target value (due to the branching choices and reuse of elements).
- But pruning and constraint on the number of combinations (≤150) make it efficient.

Let's tackle **both requests** for the `combinationSum` problem:

---

## 🔍 Part 1: **Visual Trace / Log of Backtracking**

Let’s walk through an example:

**Input:**

```js
candidates = [2, 3, 6, 7];
target = 7;
```

We want to **log each step** of the recursive call.

### ✅ Annotated Code with Logging:

```javascript
var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(start, path, sum) {
    console.log(
      `CALL: start=${start}, path=${JSON.stringify(path)}, sum=${sum}`
    );

    if (sum === target) {
      console.log(`✅ Found: ${JSON.stringify(path)}`);
      result.push([...path]);
      return;
    }
    if (sum > target) {
      console.log(`❌ Over target: ${sum} > ${target}, backtrack`);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      console.log(`-> Try: ${candidates[i]}`);
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]); // Reuse current number
      path.pop(); // Backtrack
      console.log(
        `<- Backtrack: remove ${candidates[i]}, path now ${JSON.stringify(
          path
        )}`
      );
    }
  }

  backtrack(0, [], 0);
  return result;
};
```

### ✅ Sample Run Output:

```
CALL: start=0, path=[], sum=0
-> Try: 2
CALL: start=0, path=[2], sum=2
-> Try: 2
CALL: start=0, path=[2,2], sum=4
-> Try: 2
CALL: start=0, path=[2,2,2], sum=6
-> Try: 2
CALL: start=0, path=[2,2,2,2], sum=8
❌ Over target: 8 > 7, backtrack
<- Backtrack: remove 2, path now [2,2,2]
-> Try: 3
CALL: start=1, path=[2,2,2,3], sum=9
❌ Over target: 9 > 7, backtrack
...
✅ Found: [2,2,3]
✅ Found: [7]
```

---

## 🔁 Part 2: **Iterative Version Using a Stack**

### ✅ Code (Iterative DFS with Stack):

```javascript
var combinationSum = function (candidates, target) {
  const result = [];
  const stack = [{ start: 0, path: [], total: 0 }];

  while (stack.length > 0) {
    const { start, path, total } = stack.pop();

    if (total === target) {
      result.push(path);
      continue;
    }

    if (total > target) continue;

    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i];
      stack.push({
        start: i, // can reuse same index
        path: [...path, candidate],
        total: total + candidate,
      });
    }
  }

  return result;
};
```

### ✅ Example:

```js
console.log(combinationSum([2, 3, 6, 7], 7));
// Output: [[2,2,3], [7]]
```

---

## Summary

| Approach                 | Notes                                                                  |
| ------------------------ | ---------------------------------------------------------------------- |
| Backtracking (Recursive) | Clean and expressive, with trace logs for learning                     |
| Iterative (Stack)        | Simulates recursion manually, useful for avoiding call stack overflows |

Would you like a **tree diagram of the recursive calls**, or should we continue to **optimize** or **adapt for different constraints** (e.g., max depth or no reuse)?
