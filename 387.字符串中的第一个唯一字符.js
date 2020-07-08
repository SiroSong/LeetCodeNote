/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (40.51%)
 * Likes:    226
 * Dislikes: 0
 * Total Accepted:    84.6K
 * Total Submissions: 185.5K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 
 * 
 * 示例：
 * 
 * s = "leetcode"
 * 返回 0
 * 
 * s = "loveleetcode"
 * 返回 2
 * 
 * 
 * 
 * 
 * 提示：你可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (s.length === 0) {
    return -1
  }

  const hash_map = {},
        ss = s.split('')
  let index = 0

  ss.forEach(val => {
    if (hash_map[val]) {
      hash_map[val] = 2
    } else {
      hash_map[val] = 1
    }
  })

  while (hash_map[ss[index]] === 2) {
    
    index++

    if (index === ss.length) {
      return -1
    }
  }

  return index
};
// @lc code=end

