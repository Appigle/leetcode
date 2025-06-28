const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

hasCycle([3, 2, 0, -4]);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle2 = function (head) {
  if (!head || !head.next) return false;
  let firstNode = head;
  let secondNode = head;
  while (secondNode && secondNode.next) {
    firstNode = firstNode.next;
    secondNode = secondNode.next.next;
    if (firstNode === secondNode) return true;
  }
  return false;
};
