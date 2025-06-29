const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let result = new ListNode(0);
  let current = result;
  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return result.next;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);

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
var addTwoNumbers2 = function (l1, l2) {
  const dummy = new ListNode(-1);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    current = current.next;
  }
  return dummy.next;
};
