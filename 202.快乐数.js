/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 *
 * https://leetcode-cn.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (55.10%)
 * Likes:    365
 * Dislikes: 0
 * Total Accepted:    82.4K
 * Total Submissions: 137.2K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 
 * 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到
 * 1。如果 可以变为  1，那么这个数就是快乐数。
 * 
 * 如果 n 是快乐数就返回 True ；不是，则返回 False 。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let fast = slow = n
  /**
   * 快慢指针法，快指针每次走两步，慢指针每次走一步，有环或无环快慢指针最终都会相等，
   * 判断相等时值是否为1，不唯一则不是快乐数，主要是不知道不是快乐数的时候特么数字居
   * 然是循环的😂，哔了狗了。
   */
  do {
    slow = square(slow)
    fast = square(fast)
    fast = square(fast)
  } while(slow !== fast)

  if (slow === 1) {
    return true
  } else {
    return false
  }
};

const square = num => {
  let res = 0

  while (num) {
    res += (num % 10) ** 2
    num = Math.floor(num / 10)
  }

  return res
}
// @lc code=end

