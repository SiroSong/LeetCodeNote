/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (30.07%)
 * Likes:    367
 * Dislikes: 0
 * Total Accepted:    61.6K
 * Total Submissions: 181K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let num = 0

  for (let i = 2; i < n; i++) {
    if (isPrimes(i)) {
      num++
    }
  }

  return num
};

const isPrimes = (n) => {
  /**
   * 如果[2~i^2]不存在n的因子，则n为质数
   */
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  

  return true
}
// @lc code=end

