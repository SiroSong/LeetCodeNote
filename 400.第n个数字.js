/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 *
 * https://leetcode-cn.com/problems/nth-digit/description/
 *
 * algorithms
 * Easy (33.62%)
 * Likes:    112
 * Dislikes: 0
 * Total Accepted:    9.4K
 * Total Submissions: 25.3K
 * Testcase Example:  '3'
 *
 * 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。
 * 
 * 注意:
 * n 是正数且在32位整数范围内 ( n < 2^31)。
 * 
 * 示例 1:
 * 
 * 输入:
 * 3
 * 
 * 输出:
 * 3
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * 11
 * 
 * 输出:
 * 0
 * 
 * 说明:
 * 第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
 // 小于10返回本身
  if (n <= 9) {
    return n;
  }
  let bit = 1;    // 数字的长度
  let p = 9;
  while(n - bit * p > 0) {
    n -= bit * p;
    bit++;
    p *= 10;
  }

  // num 目标数字
  let num = Math.pow(10, (bit - 1)) + Math.ceil(n / bit) - 1;
  let pos =  n % bit; // 在num中的位置
  pos = pos === 0 ? bit : pos;

  return Math.floor(num / Math.pow(10, bit - pos) % 10);
};
// @lc code=end

