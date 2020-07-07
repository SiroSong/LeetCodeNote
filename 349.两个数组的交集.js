/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (65.99%)
 * Likes:    198
 * Dislikes: 0
 * Total Accepted:    76.4K
 * Total Submissions: 109.7K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let hashmap = {}
  let hashmap_temp = {}

  nums1.forEach(val => {
    if (!hashmap[val]) {
      hashmap[val] = true
    }
  })

  return nums2.filter(val => {
    if (hashmap[val]) {
      if (!hashmap_temp[val]) {
        hashmap_temp[val] = true
        return true
      }
    }
  })
};
// @lc code=end

