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
var deleteDuplicates = function (head) {
  const remove = (head) => {
    if (!head) return;
    if (head.val === head.next?.val) {
      head.next = head.next.next;
      remove(head);
    }
    remove(head.next);
  };
  remove(head);
  return head;
};
