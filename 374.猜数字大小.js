/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 *
 * https://leetcode-cn.com/problems/guess-number-higher-or-lower/description/
 *
 * algorithms
 * Easy (40.47%)
 * Likes:    64
 * Dislikes: 0
 * Total Accepted:    25.7K
 * Total Submissions: 57.5K
 * Testcase Example:  '10\n6'
 *
 * 我们正在玩一个猜数字游戏。 游戏规则如下：
 * 我从 1 到 n 选择一个数字。 你需要猜我选择了哪个数字。
 * 每次你猜错了，我会告诉你这个数字是大了还是小了。
 * 你调用一个预先定义好的接口 guess(int num)，它会返回 3 个可能的结果（-1，1 或 0）：
 * 
 * -1 : 我的数字比较小
 * ⁠1 : 我的数字比较大
 * ⁠0 : 恭喜！你猜对了！
 * 
 * 
 * 
 * 
 * 示例 :
 * 
 * 输入: n = 10, pick = 6
 * 输出: 6
 * 
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 0,
      right = n,
      guess_num = Math.floor((left + right) / 2)
      guess_tag = guess(guess_num)

  while (guess_tag !== 0) {
    if (guess_tag === -1) {
      right = guess_num
      guess_num = Math.floor((left + right) / 2)
      guess_tag = guess(guess_num)
    } else if (guess_tag === 1) {
      if (guess_num === left) {
        left = right
      } else {
        left = guess_num
      }
      guess_num = Math.floor((left + right) / 2)
      guess_tag = guess(guess_num)
    }
  }

  return guess_num
};
// @lc code=end

