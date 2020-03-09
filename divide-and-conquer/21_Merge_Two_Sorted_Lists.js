/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

    示例1：

    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4
    限制：

    0 <= 链表长度 <= 1000
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let l3 = new ListNode(0);
  let cur = l3;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }

  l1 ? (cur.next = l1) : (cur.next = l2);
  return l3.next;
};

// 递归解法！！！！
function mergeTwoLists2(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  addNext(val) {
    this.next = val;
  }
}

const list1_1 = new ListNode(1);
const list1_2 = new ListNode(2);
const list1_3 = new ListNode(4);
list1_1.addNext(list1_2);
list1_2.addNext(list1_3);

const list2_1 = new ListNode(1);
const list2_2 = new ListNode(3);
const list2_3 = new ListNode(4);
list2_1.addNext(list2_2);
list2_2.addNext(list2_3);

// console.log(list1_1);
// console.log(list2_1);
// console.log(mergeTwoLists(list1_1, list2_1));
console.log(mergeTwoLists2(list1_1, list2_1));
