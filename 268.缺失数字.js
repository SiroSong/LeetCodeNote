/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 *
 * https://leetcode-cn.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (52.65%)
 * Likes:    277
 * Dislikes: 0
 * Total Accepted:    72.4K
 * Total Submissions: 129K
 * Testcase Example:  '[3,0,1]'
 *
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [3,0,1]
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [9,6,4,2,3,5,7,0,1]
 * 输出: 8
 * 
 * 
 * 
 * 
 * 说明:
 * 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let max, total = 0, hasZero = false

  nums.forEach(val => {
    if (val === 0) {
      hasZero = true
    }
    if (!max || max < val) {
      max = val
    }
  })

  for (let i = 1; i <= max; i++) {
    total += i
  }

  nums.forEach(val => {
    total -= val
  })

  if (hasZero && total === 0) {
    return max + 1
  }

  return total
};
// @lc code=end

