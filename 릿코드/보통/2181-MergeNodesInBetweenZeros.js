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
var mergeNodes = function (head) {
  const linkedList = (head) => {
    if (!head) return;
    if (head.next.val === 0 && !head.next.next) {
      head.next = head.next.next;
      return;
    }
    if (head.val === 0) {
      head.val = head.next.val;
      head.next = head.next.next;
      linkedList(head);
    } else if (head.next.val === 0) {
      linkedList(head.next);
    } else {
      head.val += head.next.val;
      head.next = head.next.next;
      linkedList(head);
    }
  };
  linkedList(head);
  return head;
};
