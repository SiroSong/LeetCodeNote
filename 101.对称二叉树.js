/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (48.54%)
 * Likes:    760
 * Dislikes: 0
 * Total Accepted:    136.1K
 * Total Submissions: 266.6K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你可以运用递归和迭代两种方法解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

  if (!root) return true

  let left = root.left
  let right = root.right
  let leftStack = []
  let rightStack = []

  while(left || right || leftStack.length || rightStack.length) {
    while (left && right) {
      if (left.val === right.val) {
        leftStack.push(left)
        rightStack.push(right)
        left = left.left
        right = right.right
      } else {
        return false
      }
    }

    if (left === null && right !== null) {
      return false
    }
    if (left !== null && right === null) {
      return false
    }

    left = leftStack.pop().right
    right = rightStack.pop().left
  }

  return true
};
// @lc code=end

