/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode-cn.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (50.00%)
 * Likes:    101
 * Dislikes: 0
 * Total Accepted:    24.6K
 * Total Submissions: 45.8K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines
 * 里面的字符构成。如果可以构成，返回 true ；否则返回 false。
 * 
 * (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
 * 
 * 
 * 
 * 注意：
 * 
 * 你可以假设两个字符串均只含有小写字母。
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (magazine.length === 0) {
    if (ransomNote.length === 0) {
      return true
    } else {
      return false
    }
  }
  if (ransomNote.length === 0) {
    return true
  }

  const hash_map = {},
        ransomNotes = ransomNote.split(''),
        magazines = magazine.split('')
  
  magazines.forEach(val => {
    if (hash_map[val]) {
      hash_map[val]++
    } else {
      hash_map[val] = 1
    }
  })

  return ransomNotes.every(val => {
    if (!hash_map[val] || hash_map[val] === 0) {
      return false
    } else {
      hash_map[val]--
      return true
    }
  })
};
// @lc code=end

