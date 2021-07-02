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
 * 题解： 利用两个指针n1, n2, 初始化相差 n 个身位,（头部节点之前设置一个dummy节点）
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let n1 = dummy;
  let n2 = dummy;
  for (let i = 0; i <= n; i++) {
    n2 = n2.next;
  }
  while (n2 !== null) {
    n1 = n1.next;
    n2 = n2.next;
  }
  n1.next = n1.next.next;
  return dummy.next;
};
