## ✅ Step-by-Step Explanation

### 🔁 Rotation Logic:

Rotating the list to the right by `k` means that the last `k` nodes become the first `k` nodes.

But instead of doing this `k` times (which would be slow), we can:

1. **Compute the length** of the list.
2. **Link the tail to the head** to make it a circular list.
3. **Find the new tail** and break the circle there.

---

## 🧠 Key Algorithm Steps:

1. If the list is empty or has 1 node, or `k` is 0, return `head`.
2. Count the number of nodes: `n`
3. Do `k = k % n` (because rotating `n` times results in the same list)
4. Find the `(n - k)`-th node (that will become the new tail)
5. Set the next of this node to `null`
6. The node after it will be the new head

---

## ✅ JavaScript Code:

```javascript
function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  // Step 1: Find the length and the tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Make it a circular list
  tail.next = head;

  // Step 3: Find the new tail: (length - k % length - 1)th node
  k = k % length;
  let stepsToNewTail = length - k;
  let newTail = head;
  for (let i = 1; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }

  // Step 4: Break the circle and set new head
  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}
```

---

## 🔎 Example Walkthrough:

### Input:

```js
(head = [1, 2, 3, 4, 5]), (k = 2);
```

### Output:

```js
[4, 5, 1, 2, 3];
```

---

## 🧪 Edge Case:

```js
(head = [0, 1, 2]), (k = 4); // 4 % 3 = 1
// Rotated once to the right → [2,0,1]
```

---

Let's go through the `rotateRight` code **step by step**, focusing especially on the **condition checks** and why each step is necessary.

---

## ✅ Full Code for Reference:

```javascript
function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  tail.next = head;

  k = k % length;
  let stepsToNewTail = length - k;
  let newTail = head;
  for (let i = 1; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}
```

---

## 🧠 Step-by-Step Explanation:

### 🔹 Step 1: Early Return for Edge Cases

```javascript
if (!head || !head.next || k === 0) return head;
```

- `!head`: if the list is **empty**, return `head` (which is `null`)
- `!head.next`: if the list has only **one node**, rotation doesn’t change anything → return `head`
- `k === 0`: no rotation needed → return the original `head`

This prevents unnecessary computation for trivial cases.

---

### 🔹 Step 2: Count Length of the List

```javascript
let length = 1;
let tail = head;
while (tail.next) {
  tail = tail.next;
  length++;
}
```

- We start at `head` and walk through the list.
- `length` counts how many nodes are in the list.
- `tail` will eventually point to the **last node**.

💡 Why this matters:

- Knowing the length helps us avoid rotating more than necessary (e.g. rotating 10 elements 13 times = rotate 3 times).
- We'll use `tail` to later create a circular list.

---

### 🔹 Step 3: Make the List Circular

```javascript
tail.next = head;
```

- We temporarily connect the tail to the head to form a **circular linked list**.
- This makes it easy to shift pointers without worrying about nulls.

---

### 🔹 Step 4: Calculate Effective Rotations

```javascript
k = k % length;
```

- Rotating `length` times gets you back to the original list.
- Example: rotating `[1, 2, 3]` by `3` → same list.
- So we reduce unnecessary work by only rotating `k % length` times.

---

### 🔹 Step 5: Find the New Tail

```javascript
let stepsToNewTail = length - k;
let newTail = head;
for (let i = 1; i < stepsToNewTail; i++) {
  newTail = newTail.next;
}
```

- The **new tail** will be at position `length - k` (0-based index).
- For example, if list length is 5 and `k = 2`, new tail is at position `5 - 2 = 3` (value `3` in `[1,2,3,4,5]`)
- We walk from the original `head` to reach this node.

---

### 🔹 Step 6: Set the New Head and Break the Circle

```javascript
const newHead = newTail.next;
newTail.next = null;
```

- `newHead` is the node **after** the new tail.
- We **break the circle** by setting `newTail.next = null`.

---

### 🔹 Step 7: Return the Rotated List

```javascript
return newHead;
```

Done! The list has now been rotated `k` times to the right.

---

## ✅ Visual Example:

**Input:** `[1,2,3,4,5], k = 2`

- Length = 5
- k = 2 → rotate last 2 to front
- New tail is at position `5 - 2 = 3` → node with value `3`
- New head = `4`
- Final list = `[4,5,1,2,3]`

---
