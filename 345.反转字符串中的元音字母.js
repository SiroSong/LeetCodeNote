/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (47.92%)
 * Likes:    98
 * Dislikes: 0
 * Total Accepted:    39.5K
 * Total Submissions: 78.6K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明:
 * 元音字母不包含字母"y"。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (!s.length) {
    return s
  }

  const Vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',]
  let start = 0
  let end = s.length - 1
  let ss = s.split('')

  while (start < end) {
    if (Vowels.includes(ss[start]) && Vowels.includes(ss[end])) {
      [ss[start], ss[end]] = [ss[end], ss[start]]
      start++
      end--
    } else if (!Vowels.includes(ss[start])) {
      start++
    } else if (!Vowels.includes(ss[end])) {
      end--
    }
  }

  return ss.join('')
};
// @lc code=end

