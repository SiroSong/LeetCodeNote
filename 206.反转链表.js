/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (64.48%)
 * Likes:    1027
 * Dislikes: 0
 * Total Accepted:    261.2K
 * Total Submissions: 376.1K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = temp = head

  if (!head) return null

  while(head.next) {
    current = head.next
    head.next = current.next
    current.next = temp
    temp = current
  }

  return temp
};

var reverseList = function(head) {
  if(!head || !head.next) return head
  var next = head.next
  // 递归反转
  var reverseHead = reverseList(next)
  // 变更指针
  next.next = head
  head.next = null
  
  return reverseHead
};
// @lc code=end

