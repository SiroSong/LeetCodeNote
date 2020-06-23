/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode-cn.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (46.00%)
 * Likes:    204
 * Dislikes: 0
 * Total Accepted:    41.3K
 * Total Submissions: 87.4K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * 
 * 示例 1:
 * 
 * 输入: s = "egg", t = "add"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "foo", t = "bar"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: s = "paper", t = "title"
 * 输出: true
 * 
 * 说明:
 * 你可以假设 s 和 t 具有相同的长度。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const L = s.length
  let sarray = template(s, L)
  let tarray = template(t, L)

  for (let i = 0; i < L; i++) {
    if (sarray[i] !== tarray[i]) {
      return false
    }
  }

  return true
};

const template = (str, length) => {
  let template = []
  let strarray = str.split('')

  for (let i = 0; i < length; i++) {
    template.push(null)
    for (let j = 0; j < i; j++) {
      if (strarray[i] === strarray[j]) {
        template[i] = j
        break
      }
    }
  }

  return template

  /**
   * 比较其对应关系有没有发生变化
   */
  let mapS = {}, mapT = {};
    for (let i = 0; i < s.length; i++) {
        if (!mapS[s[i]]) mapS[s[i]] = t[i];
        if (!mapT[t[i]]) mapT[t[i]] = s[i];
        if (mapS[s[i]] != t[i] || mapT[t[i]] != s[i]) return false;
    }
  return true;
}

// @lc code=end

