# 53. Maximum Subarray

**Easy**

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the **largest sum** and return _its sum_.

You must implement a solution with a time complexity of `O(n)`.

---

### Example 1:

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

### Example 2:

```
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum = 1.
```

### Example 3:

```
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum = 23.
```

---

### Constraints:

- `1 <= nums.length <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`

---

### Follow-up:

If you have figured out the `O(n)` solution, try coding another solution using the **divide and conquer** approach, which is more subtle.
