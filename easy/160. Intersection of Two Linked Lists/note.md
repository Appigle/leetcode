## ✅ Problem Understanding

You are given the **heads of two singly linked lists**, `headA` and `headB`. Your task is to return the **reference to the node** where the two lists **intersect**. If they don't intersect, return `null`.

> Note: The **intersection is by reference**, not by value. That means even if two nodes have the same value, they must also **point to the same memory address** to be considered intersecting.

---

## 🔍 Examples Recap

Example 1:

```
A: 4 → 1 \
           8 → 4 → 5
B: 5 → 6 → 1 /
Intersection at node with value = 8 (same reference!)
```

---

## ✅ Algorithm Knowledge: Two-Pointer Technique

This is the best-known solution and interview-friendly. Here's how it works:

### 🚀 Idea:

- Use two pointers `pA` and `pB`, starting at `headA` and `headB`.
- Traverse both lists.
- When a pointer reaches the end, redirect it to the **head of the other list**.
- If the lists intersect, the pointers will eventually meet at the **intersection node**.
- If not, both will eventually become `null`.

This works because the two pointers will **travel equal distances**:

```
LengthA + LengthB
```

---

## ✅ JS Implementation (O(m + n) time, O(1) space)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode|null}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    // If one reaches the end, switch to the other head
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  // Either the intersection node or null
  return pA;
};
```

---

## 🔁 Step-by-Step Example

Let’s simulate with:

- A = `4 → 1 → 8 → 4 → 5`
- B = `5 → 6 → 1 → 8 → 4 → 5`

After switching heads at the end, the lengths equalize and both pointers align at `8`.

---

## 🧠 Why It Works

- Total steps taken: `m + n`
- After first pass: pointer from A is at `null`, so it restarts at head of B
- After second pass: if intersection exists, both pointers reach it at the same time
- If no intersection: both will hit `null` together

---

## 🔒 Constraints Met

- ✅ O(m + n) time
- ✅ O(1) extra space
- ✅ Does not alter the list
