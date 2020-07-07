/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 *
 * https://leetcode-cn.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (46.63%)
 * Likes:    119
 * Dislikes: 0
 * Total Accepted:    27K
 * Total Submissions: 55.3K
 * Testcase Example:  '16'
 *
 * 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 16
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: false
 * 
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  // 第一层
  if (num === 1) {
    return true
  }

  while (true) {
    if (num % 1 !== 0) {
      return false
    } else if (num / 4 < 1) {
      return false
    } else if (num / 4 === 1) {
      return true
    }
    num /= 4
  }

  // 第二层
  return (Math.log10(num) / Math.log10(4)) % 1 === 0
};
// @lc code=end

