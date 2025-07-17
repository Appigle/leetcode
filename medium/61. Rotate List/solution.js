const rotateRight = (head, k) => {
  if (!head || !head.next) return head;
  let length = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    length++;
  }
  current.next = head;
  k = k % length;
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
};

rotateRight([1, 2, 3, 4, 5], 2);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight2 = function (head, k) {
  if (!head || !head.next || !k) return head;
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  tail.next = head; // make the linklist as a circle

  k = k % length; // avoid redundent calculate
  const newStepToTail = length - k;
  let newTail = head; // i = 0
  for (i = 1; i < newStepToTail; i++) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
};
