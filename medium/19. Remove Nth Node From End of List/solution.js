const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  for (let i = 0; i < n + 1; i++) {
    first = first.next;
  }
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd2 = function (head, n) {
  const dummy = new ListNode(-1, head);
  let first = dummy;
  let second = dummy;
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }
  while (first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};
