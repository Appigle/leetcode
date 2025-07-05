To solve the problem of swapping every two adjacent nodes in a **singly linked list**, without modifying the node values (only their pointers), we can use either:

- **Iterative method using a dummy node**, or
- **Recursive method**.

---

## 🔁 Iterative Solution (Recommended for Interviews)

### ✅ Steps:

1. Create a **dummy node** before the head for easier pointer manipulation.
2. Use a `current` pointer starting at the dummy.
3. While there are at least two nodes ahead:

   - Identify `first` and `second` nodes.
   - Rewire pointers to swap them.
   - Move `current` two steps forward.

---

### ✅ JavaScript Code:

```js
function swapPairs(head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next.next;

    // Swap
    first.next = second.next;
    second.next = first;
    current.next = second;

    // Move to next pair
    current = first;
  }

  return dummy.next;
}
```

---

## 🧠 Visual Example

**Input:** `[1, 2, 3, 4]`

```
Before swap:  dummy → 1 → 2 → 3 → 4
                    ↑
                 current

1st swap: dummy → 2 → 1 → 3 → 4
                       ↑
                    current

2nd swap: dummy → 2 → 1 → 4 → 3
                             ↑
                          current
```

**Output:** `[2, 1, 4, 3]`

---

## 🔁 Recursive Version (For Practice)

```js
function swapPairs(head) {
  if (!head || !head.next) return head;

  let first = head;
  let second = head.next;

  first.next = swapPairs(second.next);
  second.next = first;

  return second;
}
```

---

## 📦 Time & Space Complexity

- **Time Complexity:** `O(n)` — each node visited once.
- **Space Complexity:**

  - **Iterative:** `O(1)`
  - **Recursive:** `O(n)` due to call stack
