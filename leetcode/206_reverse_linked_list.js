/* 
    Reverse a singly linked list.

    Example:
        Input: 1->2->3->4->5->NULL 
        Output: 5->4->3->2->1->NULL 
    
    Follow up:
        A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

// 这个就是常规操作了，使用一个变量记录前驱pre，一个变量记录后继next.
// 不断更新current.next = pre 就好了
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head;

  let cur = head;
  let pre = null;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};
