/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode-cn.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (41.96%)
 * Likes:    144
 * Dislikes: 0
 * Total Accepted:    36.4K
 * Total Submissions: 83.9K
 * Testcase Example:  '16'
 *
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * 
 * 说明：不要使用任何内置的库函数，如  sqrt。
 * 
 * 示例 1：
 * 
 * 输入：16
 * 输出：True
 * 
 * 示例 2：
 * 
 * 输入：14
 * 输出：False
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 0) {
    return false
  } else if (num === 1) {
    return true
  }
  
  let left = 0,
      right = num,
      mid = (left + right) / 2 - ((left + right) / 2) % 1

  while (mid !== left) {
    if ((mid**2) === num) {
      return true
    } else if ((mid**2) > num) {
      right = mid
      mid = (left + right) / 2 - ((left + right) / 2) % 1
    } else if ((mid**2) < num) {
      left = mid
      mid = (left + right) / 2 - ((left + right) / 2) % 1
    }
  }

  return false
};
// @lc code=end

