## ✅ Problem Summary

You're given an array `height[]` where each element represents the height of a vertical line at that index. You need to:

- Pick **two lines** such that together with the x-axis, they form a container.
- **Return the maximum area of water** that this container can store.
- The area is calculated as:

  ```
  area = min(height[i], height[j]) * (j - i)
  ```

  where `i` and `j` are the two selected indices.

---

## 🧠 Algorithm Knowledge

### This is a **Two Pointer** problem.

Why? Because:

- Brute-force (nested loop) would be **O(n²)** — too slow for `n ≤ 10⁵`.
- Instead, we can use:

### **Two-Pointer Strategy (Greedy)**:

1. Start with two pointers: `left = 0` and `right = height.length - 1`.
2. Compute the area and update `maxArea`.
3. Move the pointer with the **shorter line** inward, because:

   - Moving the taller line inward **can’t help** increase area (the shorter one limits it).

4. Repeat until the two pointers meet.

---

## ✅ JavaScript Solution (Efficient – O(n) Time, O(1) Space)

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const area = Math.min(height[left], height[right]) * width;
    maxArea = Math.max(maxArea, area);

    // Move the shorter line inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
```

---

## 🧪 Example Walkthrough

Input: `[1,8,6,2,5,4,8,3,7]`

- Start: `left = 0`, `right = 8` → area = `min(1, 7) * (8 - 0) = 8`
- Move `left` since 1 < 7
- `left = 1`, `right = 8` → area = `min(8, 7) * 7 = 49` ✅ max so far
- Continue...

Final result: **49**
