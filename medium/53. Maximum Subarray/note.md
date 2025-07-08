This classic problem is known as **Maximum Subarray Sum**, and the most efficient solution is Kadane’s Algorithm (O(n) time). There’s also a more subtle **divide-and-conquer** approach (O(n log n)).

---

### ✅ Kadane’s Algorithm (O(n))

**Idea:**
Iterate through the array, keeping track of:

- `currentSum`: maximum sum of subarray ending at current index
- `maxSum`: maximum of all `currentSum` so far

If `currentSum` becomes negative, reset it to 0.

---

### ✅ Kadane's Code:

```javascript
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]); // extend or restart
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
```

---

### 🔍 Example Walkthrough: `[-2,1,-3,4,-1,2,1,-5,4]`

| Index | Num | currentSum       | maxSum |
| ----- | --- | ---------------- | ------ |
| 0     | -2  | -2               | -2     |
| 1     | 1   | max(1, -1) = 1   | 1      |
| 2     | -3  | max(-3, -2) = -2 | 1      |
| 3     | 4   | max(4, 2) = 4    | 4      |
| 4     | -1  | 3                | 4      |
| 5     | 2   | 5                | 5      |
| 6     | 1   | 6                | 6 ✅   |
| 7     | -5  | 1                | 6      |
| 8     | 4   | 5                | 6      |

🔚 Max sum is `6`, from subarray `[4,-1,2,1]`.

---

### 🧠 Follow-up: Divide and Conquer Approach (O(n log n))

**Idea:**

- Divide the array into two halves.
- Find:

  - Max subarray in **left half**
  - Max subarray in **right half**
  - Max **crossing subarray** (from left to right across middle)

- Return the max of the three.

This approach is similar to **merge sort**.

---

Let’s break down this code **line-by-line in detail** — it’s the heart of **Kadane’s Algorithm**, a famous technique for solving the **Maximum Subarray Sum** problem in **O(n)** time.

---

### 🔍 Problem Recap

Given an array of integers (positive, negative, or zero), we want to find a **contiguous subarray** that has the **largest sum**, and return that sum.

---

## ✅ Code Overview

```javascript
for (let i = 1; i < nums.length; i++) {
  currentSum = Math.max(nums[i], currentSum + nums[i]);
  maxSum = Math.max(maxSum, currentSum);
}
```

This is part of the Kadane’s Algorithm.

We assume that before the loop:

```javascript
let currentSum = nums[0];
let maxSum = nums[0];
```

---

## 🧠 Key Concepts

We track two things:

| Variable     | Meaning                                          |
| ------------ | ------------------------------------------------ |
| `currentSum` | Max subarray sum **ending at current index `i`** |
| `maxSum`     | Max subarray sum **found so far**                |

Now, let’s walk line by line:

---

### 🔁 Line 1 – Loop through the array starting from index 1

```javascript
for (let i = 1; i < nums.length; i++) {
```

- We already initialized `currentSum` with `nums[0]`.
- Now we start checking from `nums[1]` onward.

---

### 🧮 Line 2 – Update current subarray sum

```javascript
currentSum = Math.max(nums[i], currentSum + nums[i]);
```

This is the **core decision**.

We are deciding:

> 👉 Do we **extend** the previous subarray (i.e., add nums\[i] to `currentSum`)?
>
> 👉 Or do we **restart** the subarray at the current element `nums[i]`?

### ❗ Why?

- If `currentSum + nums[i]` is larger than `nums[i]` itself, then we’re still benefiting by **extending** the subarray.
- If not, it's better to **start a new subarray** at `nums[i]`.

#### 📌 Example:

Let’s say:

```javascript
currentSum = 6;
nums[i] = -2;
```

→ `Math.max(-2, 6 + (-2)) = Math.max(-2, 4) = 4` → we extend the subarray.

But if:

```javascript
currentSum = -5;
nums[i] = 4;
```

→ `Math.max(4, -5 + 4) = Math.max(4, -1) = 4` → we restart the subarray from 4.

---

### 🏆 Line 3 – Update global max if needed

```javascript
maxSum = Math.max(maxSum, currentSum);
```

- Compare the `maxSum` we’ve found so far with the `currentSum` we just computed.
- If `currentSum` is higher, it becomes the new `maxSum`.

---

### ✅ Final Result

Once the loop ends, `maxSum` holds the largest sum of any contiguous subarray.

---

## 📈 Example Step-by-Step

Let’s run it on `nums = [-2,1,-3,4,-1,2,1,-5,4]`:

| i   | nums\[i] | currentSum         | maxSum |
| --- | -------- | ------------------ | ------ |
| 0   | -2       | -2 (initial)       | -2     |
| 1   | 1        | max(1, -2+1)=1     | 1      |
| 2   | -3       | max(-3, 1+(-3))=-2 | 1      |
| 3   | 4        | max(4, -2+4)=4     | 4      |
| 4   | -1       | max(-1, 4+(-1))=3  | 4      |
| 5   | 2        | max(2, 3+2)=5      | 5      |
| 6   | 1        | max(1, 5+1)=6      | 6      |
| 7   | -5       | max(-5, 6-5)=1     | 6      |
| 8   | 4        | max(4, 1+4)=5      | 6      |

✅ Final `maxSum = 6`

---

## 🎯 Summary

- `Math.max(nums[i], currentSum + nums[i])` helps us **decide to restart or extend** the subarray.
- `Math.max(maxSum, currentSum)` keeps track of the **best overall sum**.

---

Here's the **Divide and Conquer** implementation of the **Maximum Subarray Sum** problem in JavaScript, along with **detailed comments** and a **visual walkthrough** to help you understand step-by-step.

---

## 💡 High-Level Idea

We divide the array into two halves:

- 🟦 Max subarray in **left**
- 🟩 Max subarray in **right**
- 🟨 Max subarray **crossing** the middle

We return the **maximum** of those three.

---

## ✅ JavaScript Code (with Comments)

```javascript
var maxSubArray = function (nums) {
  return divideAndConquer(nums, 0, nums.length - 1);
};

function divideAndConquer(nums, left, right) {
  // Base case: only one element
  if (left === right) return nums[left];

  // Split array into two halves
  const mid = Math.floor((left + right) / 2);

  // Recursively find max subarray sum on left, right, and crossing mid
  const leftMax = divideAndConquer(nums, left, mid);
  const rightMax = divideAndConquer(nums, mid + 1, right);
  const crossMax = maxCrossingSum(nums, left, mid, right);

  // Return the maximum of the three
  return Math.max(leftMax, rightMax, crossMax);
}

function maxCrossingSum(nums, left, mid, right) {
  // Max sum on left half ending at mid
  let sum = 0;
  let leftSum = -Infinity;
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    leftSum = Math.max(leftSum, sum);
  }

  // Max sum on right half starting at mid+1
  sum = 0;
  let rightSum = -Infinity;
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    rightSum = Math.max(rightSum, sum);
  }

  // Combine both sides
  return leftSum + rightSum;
}
```

---

## 🧠 Visual Breakdown

Suppose `nums = [-2,1,-3,4,-1,2,1,-5,4]`

```
Step 1:
Divide: [-2,1,-3,4] | [-1,2,1,-5,4]

Step 2:
Keep dividing:
[-2,1] -> [-2] and [1]
[-3,4] -> [-3] and [4]
...

Eventually, we'll get down to base cases like:
[4] => return 4
[-1] => return -1
...

Step 3:
Merge upward:
- Find max crossing mid (e.g. [4, -1, 2] → sum = 5)
- Combine max from left, right, and cross

Final step gives max = 6 (from subarray `[4,-1,2,1]`)
```

---

## ⚖️ Time Complexity

- **Time**: O(n log n) due to divide and conquer recursion
- **Space**: O(log n) for recursive stack space

---
