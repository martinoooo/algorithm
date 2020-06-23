/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example:

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(null);
  let now = result;
  let extra = 0;
  while (l1 || l2 || extra) {
    now.next = new ListNode(null);
    now = now.next;
    let add;
    if (l1 && l2) {
      add = l1.val + l2.val + extra;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1) {
      add = l1.val + extra;
      l1 = l1.next;
    } else if (l2) {
      add = l2.val + extra;
      l2 = l2.next;
    } else {
      add = extra;
    }
    if (add > 9) {
      now.val = add - 10;
      extra = 1;
    } else {
      now.val = add;
      extra = 0;
    }
  }
  return result.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
ListNode.prototype.addNext = function (val) {
  this.next = val;
};

const l1 = new ListNode(9);
// const two = new ListNode(4);
// const three = new ListNode(3);
// l1.addNext(two);
// two.addNext(three);

const l2 = new ListNode(9);
// const two1 = new ListNode(6);
// const three1 = new ListNode(4);
// l2.addNext(two1);
// two1.addNext(three1);

console.log(addTwoNumbers(l1, l2));
