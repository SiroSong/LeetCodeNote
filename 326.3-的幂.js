/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 *
 * https://leetcode-cn.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (45.06%)
 * Likes:    112
 * Dislikes: 0
 * Total Accepted:    50K
 * Total Submissions: 106.6K
 * Testcase Example:  '27'
 *
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 27
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: 0
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: 9
 * 输出: true
 * 
 * 示例 4:
 * 
 * 输入: 45
 * 输出: false
 * 
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  // 第一层
  if (n === 1) {
    return true
  }

  while (true) {
    if (n % 1 !== 0) {
      return false
    } else if (n / 3 < 1) {
      return false
    } else if (n / 3 === 1) {
      return true
    }
    n /= 3
  }
  // 第二层
  /**
   * 若 n 是 3 的幂则 i 是整数。
   * n = 3^i
   * i = log3(n)
   * i = logb(n)/logb(3)
   */
  return (Math.log10(n) / Math.log10(3)) % 1 === 0
};
// @lc code=end

