To solve the problem **in one pass**, we can use the **two-pointer technique** (also known as the fast and slow pointer method).

---

## 🔍 Problem Explanation

Given a **singly linked list**, remove the **nth node from the end** of the list in one traversal.

### 🧠 Example

For `head = [1,2,3,4,5]`, and `n = 2`, we want to remove `4` (2nd from the end), so the output is `[1,2,3,5]`.

---

## ✅ Algorithm: Two Pointer Approach (One Pass)

### ✨ Steps:

1. **Create a dummy node** pointing to the head (helps handle edge cases like removing the first node).
2. Initialize two pointers: `first` and `second`, both pointing to the dummy node.
3. **Advance the `first` pointer `n + 1` steps** forward to create a gap of `n` between `first` and `second`.
4. Move both pointers until `first` reaches the end of the list.
5. Now, `second.next` is the node to be removed. Do `second.next = second.next.next`.
6. Return `dummy.next` as the new head.

---

## 💻 JavaScript Code

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = next || null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head); // Dummy node before head
  let first = dummy;
  let second = dummy;

  // Step 1: Move first pointer n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Step 2: Move both until first reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // Step 3: Remove the target node
  second.next = second.next.next;

  // Step 4: Return new head
  return dummy.next;
};
```

---

## 🧪 Test Example

```js
// Helper to build list
function buildList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper to print list
function printList(head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

// Example test
const head = buildList([1, 2, 3, 4, 5]);
const n = 2;
console.log(printList(removeNthFromEnd(head, n))); // [1,2,3,5]
```

---

## 🧠 Time & Space Complexity

| Aspect | Complexity                              |
| ------ | --------------------------------------- |
| Time   | O(L), where L is the length of the list |
| Space  | O(1), constant extra space              |

---

Absolutely! Let’s break it down step by step with more **details and intuition** behind each line:

---

## 🔁 Why "advance the `first` pointer `n + 1` steps"?

The goal is to **maintain a gap of `n` nodes** between the `first` and `second` pointers.

### ✅ Example:

Let’s say the list is:
`[1, 2, 3, 4, 5]`
And `n = 2` (we want to remove the **2nd node from the end**, which is `4`)

We use a **dummy node** before `1`:
`[0(dummy), 1, 2, 3, 4, 5]`

---

### Step 1: Advance `first` by `n + 1 = 3` steps

This creates a **gap of 2 nodes** between `first` and `second`.

- Initial:

  - `first` at dummy (0), `second` at dummy (0)

- After 1 step: `first` at 1

- After 2 steps: `first` at 2

- After 3 steps: `first` at 3
  Now:

- `second` at 0

- `first` at 3
  ➡️ Gap of 3 steps taken, which means a **distance of 2 nodes between them**.

---

### Step 2: Move both until `first` reaches the end

Now move both `first` and `second` one step at a time:

| Step | first at | second at |
| ---- | -------- | --------- |
| 1    | 4        | 1         |
| 2    | 5        | 2         |
| 3    | null     | 3         |

When `first` reaches `null` (end of the list), `second` is at `3`.

---

### Step 3: Remove the node

Now that `second` is **right before** the node to be deleted (`4`), we just skip over it:

```js
second.next = second.next.next; // 3 → 5 (skipping 4)
```

Now the list becomes:
`[1, 2, 3, 5]`

---

## 🧠 Summary (Easy Mental Model)

- We advance `first` `n + 1` times so the gap between `first` and `second` is exactly `n`.
- Then we walk both together until `first` hits the end.
- At that point, `second.next` is the node to delete.
- Skip that node by `second.next = second.next.next`.

This trick is elegant and **avoids counting the length of the list** — just one pass!
