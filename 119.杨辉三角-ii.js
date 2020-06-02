/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (57.94%)
 * Likes:    149
 * Dislikes: 0
 * Total Accepted:    53.6K
 * Total Submissions: 87.7K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let row = [1]

  for (let i = 0; i <= rowIndex; i++) {
    // 第二层倒序是为了不破坏上一次循环得到的结果，因为每次需要用到j-1的值
    for (let j = i; j > 0 ; j--) {
      if (j === i) {
        row.push(1)
      } else {
        row[j] = row[j] + row[j - 1]
      }
    }
  }

  return row
};
// @lc code=end

