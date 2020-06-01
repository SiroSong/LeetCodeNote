/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (49.06%)
 * Likes:    319
 * Dislikes: 0
 * Total Accepted:    76.3K
 * Total Submissions: 147.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 
 * 
 * 示例 1:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7]
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回 true 。
 * 
 * 示例 2:
 * 
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * 返回 false 。
 * 
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  // if (!root) return true

  // let field = []
  // let min = null

  // field.push([root])

  // for (let i = 0; i < field.length; i++) {
  //   let current_array = []

  //   for (let j = 0; j < field[i].length; j++) {
  //     if (field[i][j].left) {
  //       current_array.push(field[i][j].left)
  //     } else if (min === null) {
  //       min = i
  //     }
  //     if (field[i][j].right) {
  //       current_array.push(field[i][j].right)
  //     } else if (min === null) {
  //       min = i
  //     }
  //   }

  //   if (current_array.length) {
  //     field.push(current_array)
  //   }
  // }
  
  // return field.length - min <= 2

  if (!root) return true

  if (Math.abs(height(root.left) - height(root.right)) > 1) {
    return false
  }

  return isBalanced(root.left) && isBalanced(root.right)
};

function height(node) {
  if (!node) return 0

  return Math.max(height(node.left), height(node.right)) + 1
}
// @lc code=end

