the **Dutch National Flag problem** — a classic algorithm question.

---

## 🎯 Problem Summary

Given an array `nums` with values:

- `0` (red), `1` (white), `2` (blue)

You must **sort them in-place** so that:

- All `0`s come first
- Then all `1`s
- Then all `2`s

✅ **No built-in sort**, ✅ must be **O(n)** time and **O(1)** space.

---

## ✅ Best Solution: One-Pass with Three Pointers

Use the **Dutch National Flag algorithm** by Edsger Dijkstra.

### 🔧 Pointers:

- `low`: next position for `0`
- `mid`: current index
- `high`: next position for `2`

---

## 🧠 Idea:

We scan through the array with `mid`:

- If `nums[mid] === 0`: swap with `nums[low]`, move both `low++` and `mid++`
- If `nums[mid] === 1`: it's in the right place → just `mid++`
- If `nums[mid] === 2`: swap with `nums[high]`, move `high--` (don't move `mid` yet!)

---

## ✅ JavaScript Code:

```javascript
function sortColors(nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}
```

---

## 🧪 Example:

### Input:

```js
[2, 0, 2, 1, 1, 0];
```

### Steps:

1. Swap 2 with 0 → `[0, 0, 2, 1, 1, 2]`
2. 0 is at correct place → move on
3. 0 is at correct place → move on
4. 2 swap with 1 → `[0, 0, 1, 1, 2, 2]`

✅ Done!

---

## ⏱ Time & Space Complexity

| Metric | Value |             |
| ------ | ----- | ----------- |
| Time   | O(n)  |             |
| Space  | O(1)  | ✅ in-place |
