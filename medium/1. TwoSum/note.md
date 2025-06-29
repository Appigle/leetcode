## ✅ Problem Summary

You’re given two non-empty **linked lists**, `l1` and `l2`. Each node contains a **single digit**, and the digits are stored in **reverse order**, so:

```txt
l1 = [2,4,3] means 342
l2 = [5,6,4] means 465
→ Sum: 807 → return [7,0,8]
```

---

## ✅ Key Concepts

This is essentially **element-wise addition with carry**, like how we do addition by hand:

```
  2 → 4 → 3   (represents 342)
+ 5 → 6 → 4   (represents 465)
--------------
  7 → 0 → 8   (result is 807)
```

We:

- Add digits from the two lists
- Add any `carry` from the previous addition
- Create a new node for each digit of the result

---

## ✅ JavaScript Solution

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0); // Dummy head
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10); // Store digit
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};
```

---

## 🔍 Step-by-Step for Example 1

`l1 = [2,4,3]` (342)
`l2 = [5,6,4]` (465)

1. `2 + 5 + 0 = 7` → carry = 0 → add 7
2. `4 + 6 + 0 = 10` → carry = 1 → add 0
3. `3 + 4 + 1 = 8` → carry = 0 → add 8

✅ Output: `[7,0,8]`

---

## 📦 Time & Space Complexity

- **Time**: O(max(m, n)) – where m and n are the lengths of l1 and l2
- **Space**: O(max(m, n)) – for the result list
