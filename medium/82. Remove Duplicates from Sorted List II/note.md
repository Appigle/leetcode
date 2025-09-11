Algorithm Step by Step

Create a dummy node pointing to head.

Set prev pointer to dummy.

Traverse the list using head.

If head.val == head.next.val, we found duplicates. Skip all nodes with that value.

Then connect prev.next to the node after that duplicate block.

If no duplicate, just move prev forward.

At the end, return dummy.next as the new head.”

**LeetCode 82: Remove Duplicates from Sorted List II**.
Let’s stick to your preferred format:

---

# 1) Problem in plain words

We’re given the head of a **sorted linked list**.
If a value appears more than once, **delete all of its occurrences**.
Keep only values that occur exactly once, and return the resulting sorted list.

---

# 2) Algorithm knowledge you need

Because the list is **sorted**:

- All duplicates are **grouped together**.
- That means if we see `1 → 1 → 1`, we can skip the entire run of `1`s.

⚡ Trick: Use a **dummy node** before `head` to simplify handling cases where the first few nodes are duplicates.

Process:

1. Initialize a dummy node pointing to head.
2. Use a pointer `prev` (last node before the current run of nodes).
3. Traverse with `head`.

   - If `head.val == head.next.val`, skip the entire block of duplicates.
   - Else, move `prev` forward.

4. At the end, return `dummy.next`.

---

# 3) JavaScript Solution

```js
function deleteDuplicates(head) {
  const dummy = new ListNode(0, head); // dummy before head
  let prev = dummy;

  while (head) {
    if (head.next && head.val === head.next.val) {
      // Skip nodes with the same value
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      // Cut out the duplicates
      prev.next = head.next;
    } else {
      // No duplicate, move prev
      prev = prev.next;
    }
    head = head.next;
  }

  return dummy.next;
}
```

---

# 4) Complexity

- **Time:** O(n), because each node is visited once.
- **Space:** O(1), only pointers are used.

---

# 5) Dry run Example

Input: `1 → 2 → 3 → 3 → 4 → 4 → 5`

- Start at `1` (unique, keep).
- Move to `2` (unique, keep).
- At `3 → 3`, skip both.
- At `4 → 4`, skip both.
- Left with `1 → 2 → 5`. ✅
