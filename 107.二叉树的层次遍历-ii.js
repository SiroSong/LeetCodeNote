/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (62.58%)
 * Likes:    235
 * Dislikes: 0
 * Total Accepted:    58.4K
 * Total Submissions: 89.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {

  if (!root) return []

  let queue = []
  let result = []
  let pointer = 0
  queue.push([root])

  while(pointer < queue.length) {
    let nodes = queue[pointer++]
    let temp_node = []
    let temp_val = []

    for (let i = 0; i < nodes.length; i++) {
      temp_val.push(nodes[i].val)

      if (nodes[i].left) {
        temp_node.push(nodes[i].left)
      }
      if (nodes[i].right) {
        temp_node.push(nodes[i].right)
      }
    }

    if (temp_val.length) {
      queue.push(temp_node)
      result.unshift(temp_val)
    }
  }

  return result
};
// @lc code=end

