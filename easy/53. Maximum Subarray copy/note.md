## ✅ What does “**sorted in non-decreasing order**” mean?

It means:

> Each number in the array is **greater than or equal to** the one before it.

### In other words:

- The numbers **never go down**.
- **Duplicates are allowed**.
- The sequence may "stay the same" or "go up".

---

### ✅ Examples of **non-decreasing** arrays:

```js
[1, 1, 2, 3, 3, 4, 5]      ✅ valid
[0, 0, 0, 1, 1, 2]         ✅ valid
[-3, -2, -2, 0, 10]        ✅ valid
```

### ❌ Examples of **not** non-decreasing arrays:

```js
[5, 4, 3, 2, 1]            ❌ decreasing
[1, 3, 2]                  ❌ goes up then down
[0, 2, 1, 3]               ❌ 2 → 1 is invalid
```

---

## 🔁 Compare with:

| Term               | Meaning                                 | Example        |
| ------------------ | --------------------------------------- | -------------- |
| **Increasing**     | Strictly growing, no duplicates allowed | `[1, 2, 3]`    |
| **Non-decreasing** | Allows duplicates, never decreases      | `[1, 1, 2, 3]` |
| **Decreasing**     | Strictly shrinking                      | `[5, 4, 3]`    |
| **Non-increasing** | Allows duplicates, never increases      | `[5, 5, 4, 3]` |

---

## ✅ Why this matters in coding:

Since the array is **non-decreasing**, you can:

- Use the **two-pointer technique**
- Avoid extra sorting
- Know that **duplicates are adjacent**

This is especially helpful for in-place operations like removing duplicates!

---
