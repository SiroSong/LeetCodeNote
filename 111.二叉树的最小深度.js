/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (40.16%)
 * Likes:    260
 * Dislikes: 0
 * Total Accepted:    78.2K
 * Total Submissions: 184K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  
  // 当左右子树都为空时，说明此时这个节点就是叶子结点，直接层数加一返回就完事了。
  if (!root.left && !root.right) return 1
  // 当左子树为空时，这时就不能再让它递归来影响层数的计算了，都走到这一步了那它肯定有
  // 右子树，就直接在递归它的右子树，同理处理右子树为空的情况。
  if (!root.left) return min_dep(root.right)
  if (!root.right) return min_dep(root.left)
  
  return Math.min(min_dep(root.left), min_dep(root.right))
};

const min_dep = node => {
  if (!node) return 0

  return 1 + minDepth(node)
}
// @lc code=end

