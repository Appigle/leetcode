/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let first = head;
  let second = head.next;

  first.next = swapPairs(second.next);
  second.next = first;
  return second;
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let current = dummy;
  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next.next;

    //swap
    first.next = second.next;
    second.next = first;
    current.next = second;

    current = first;
  }
  return dummy.next;
};
