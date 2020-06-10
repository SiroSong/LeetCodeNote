/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (34.80%)
 * Likes:    228
 * Dislikes: 0
 * Total Accepted:    27.4K
 * Total Submissions: 72.4K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如，
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "A"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 28
 * 输出: "AB"
 * 
 * 
 * 示例 3:
 * 
 * 输入: 701
 * 输出: "ZY"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let nums = []
  let str = ''

  while (n > 0) {
    if (n % 26 === 0) {
      nums.unshift(26)
      n = Math.floor((n - 1) / 26)
    } else {
      nums.unshift(n % 26)
      n = Math.floor(n / 26)
    }
    
  }

  while (nums.length) {
    str = str + String.fromCharCode(nums.shift() + 64)
  }

  return str
};
// @lc code=end

