/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (63.98%)
 * Likes:    306
 * Dislikes: 0
 * Total Accepted:    80.9K
 * Total Submissions: 121.6K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let yangHuiTrigle = []

  if (numRows === 0) return yangHuiTrigle

  yangHuiTrigle.push([1])

  for (let x = 1; x < numRows; x++) {
    let row = []

    for (let y = 0; y <= x; y++) {
      if (y === 0 || y === x) {
        row.push(1)
      } else {
        row.push(yangHuiTrigle[ x - 1][y - 1] + yangHuiTrigle[x - 1][y])
      }
    }

    yangHuiTrigle.push(row)
  }

  return yangHuiTrigle
};
// @lc code=end

