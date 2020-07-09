/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (58.18%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    30K
 * Total Submissions: 48.4K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 
 * 输出：
 * e
 * 
 * 解释：
 * 'e' 是那个被添加的字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  if (!s.length || !t.length) {
    return t
  }
  
  const hash_map = {},
        ss = s.split(''),
        ts = t.split('')

  ss.forEach(val => {
    if (hash_map[val]) {
      hash_map[val]++
    } else {
      hash_map[val] = 1
    }
  })

  return ts.filter(val => {
    if (hash_map[val] === undefined) {
      return true
    }

    if (hash_map[val] < 1) {
      return true
    } else {
      hash_map[val]--
    }
  }).join('')
};
// @lc code=end

