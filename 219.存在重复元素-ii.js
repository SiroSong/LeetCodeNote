/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (35.84%)
 * Likes:    179
 * Dislikes: 0
 * Total Accepted:    49.5K
 * Total Submissions: 125.8K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的
 * 绝对值 至多为 k。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const hashMap = {}
  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (hashMap[nums[i]] === undefined) {
      hashMap[nums[i]] = i
    } else {
      if (i - hashMap[nums[i]] <= k) {
        return true
      }
      hashMap[nums[i]] = i
    }
  }

  return false
};
// @lc code=end

