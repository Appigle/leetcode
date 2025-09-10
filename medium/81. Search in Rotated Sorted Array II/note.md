this is **LeetCode 81: Search in Rotated Sorted Array II**.
I’ll stick to your preferred structure: (1) explain, (2) key ideas, (3) JS solutions (3 approaches), plus the follow-up.

# 1) Problem in plain words

You’re given a non-decreasing array that was rotated at some pivot. It may contain duplicates. Determine if `target` exists. Do it with as few operations as possible (i.e., aim for binary search—avoid linear scan unless forced by duplicates).

# 2) Algorithm knowledge you need

- **Rotated binary search**: In a rotation, at least one side of the midpoint is sorted.
- **Duplicates break ordering signals**: When `nums[mid] == nums[left] == nums[right]`, you can’t tell which side is sorted—so you must shrink the range by moving `left++` or `right--`. This is what causes the **worst-case O(n)** behavior, even though typical runs are **O(log n)**.

Key checks (using `right`-anchored logic):

- If `nums[mid] == target` → found.
- If `nums[mid] < nums[right]`, right half is sorted:

  - If `target` in `(nums[mid], nums[right]]` → search right; else left.

- Else if `nums[mid] > nums[right]`, left half is sorted:

  - If `target` in `[nums[left], nums[mid))` → search left; else right.

- Else (`nums[mid] == nums[right]`) → `right--` (or `left++`) to break ties.

# 3) JavaScript solutions

## A) Modified binary search (handles duplicates by shrinking)

```js
function search(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const mv = nums[mid];

    if (mv === target) return true;

    // When duplicates blur the order, shrink the window
    if (mv === nums[right]) {
      right--; // could also do left++—either is fine
      continue;
    }

    if (mv < nums[right]) {
      // right half is sorted
      if (mv < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // left half is sorted
      if (nums[left] <= target && target < mv) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
}
```

**Why this minimizes steps:** It’s binary search everywhere except when duplicates block us—then we shrink by 1 to restore order info ASAP.

**Dry run (example 1)**: `[2,5,6,0,0,1,2]`, `target=0` → typical path finds `0` after a few splits.
**Example 2** (`target=3`) → prunes toward the side where 3 could live; doesn’t find it → `false`.

**Time:** Average/typical **O(log n)**; **worst-case O(n)** when many equal elements.
**Space:** **O(1)**.

---

## B) Pivot-then-binary-search (two binary searches)

1. Find the **smallest** index `pivot` (rotation point).
2. Decide which sorted half could contain `target`, then do a normal binary search in that half.

To handle duplicates in pivot search, you may need to **shrink ends** when `nums[mid] == nums[right]`.

```js
function search(nums, target) {
  const n = nums.length;

  // Find rotation index (index of minimum)
  const pivot = findPivot(nums);

  // Choose the half
  let left, right;
  if (target >= nums[pivot] && target <= nums[n - 1]) {
    left = pivot;
    right = n - 1;
  } else {
    left = 0;
    right = pivot - 1;
  }

  return binSearch(nums, left, right, target);
}

function findPivot(nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] < nums[right]) {
      right = mid; // min is in [left..mid]
    } else if (nums[mid] > nums[right]) {
      left = mid + 1; // min is in (mid..right]
    } else {
      // nums[mid] == nums[right], can't tell; shrink
      right--;
    }
  }
  return left; // index of minimum
}

function binSearch(a, l, r, t) {
  while (l <= r) {
    const m = l + ((r - l) >> 1);
    if (a[m] === t) return true;
    if (a[m] < t) l = m + 1;
    else r = m - 1;
  }
  return false;
}
```

**Notes:** Clean separation of concerns; still suffers **O(n)** worst-case pivot finding when duplicates mask order.

---

## C) Baseline linear scan (for completeness)

```js
const search = (nums, target) => nums.includes(target);
```

Simple but **O(n)**—not optimal unless constraints are tiny or data is adversarial.

---

# Follow-up: Does allowing duplicates affect runtime?

**Yes.**
Without duplicates (LeetCode 33), the array always reveals which side is sorted, so you get **O(log n)**.
With duplicates, cases like `[1,1,1,1,1,1,1]` or `[1,1,1,3,1]` make `nums[mid] == nums[left] == nums[right]`, forcing you to move a pointer by one step. In the **worst case** you might shrink the window one by one → **O(n)**. Practically, average cases still behave close to **O(log n)**.
