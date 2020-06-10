/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 * algorithms
 * Easy (49.96%)
 * Likes:    302
 * Dislikes: 0
 * Total Accepted:    97.4K
 * Total Submissions: 180.1K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明:
 * 
 * 
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 
 * 示例:
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // let temp_nums = [], mid_index

  // for (let i = 0; numbers[i] <= target / 2; i++) {
  //   mid_index = i
  //   temp_nums.push(numbers[i])
  // }

  // for (let i = 0; i < temp_nums.length; i++) {
  //   for (let j = mid_index; j < numbers.length; j++) {
  //     if (temp_nums[i] + numbers[j] === target) {
  //       return [i + 1, j + 1]
  //     }
  //   }
  // }

  let end = numbers.length - 1, begin = 0

  while (begin !== end) {
    if (numbers[begin] + numbers[end] > target) {
      end--
      continue
    }
    if (numbers[begin] + numbers[end] < target) {
      begin++
      continue
    }
    if (numbers[begin] + numbers[end] === target) {
      return [begin + 1, end + 1]
    }
  }
};
// @lc code=end

