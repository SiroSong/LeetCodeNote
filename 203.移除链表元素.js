/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (42.33%)
 * Likes:    398
 * Dislikes: 0
 * Total Accepted:    84K
 * Total Submissions: 183.8K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let current = head
  let pre = null

  if (!head) return head

  do {
    if (pre === null) {
      if (current.val === val) {
        head = current.next
      } else {
        pre = current
      }
    } else {
      if (current.val === val) {
        pre.next = current.next
      } else {
        pre = current
      }
    }
    current = current.next
  } while(current)

  return head
};
// @lc code=end

