/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.82%)
 * Likes:    704
 * Dislikes: 0
 * Total Accepted:    124.6K
 * Total Submissions: 357.9K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let ret = ""

    if (strs.length === 0) return ret

    if (strs.length === 1) return strs[0]

    const exampleStr = strs[0]
    if (exampleStr.length === 0) return ret

    const length = strs.length

    for (let i = 0; i < exampleStr.length ; i++) {
        let temp = exampleStr.slice(0, i + 1)
        for (let j = 0; j < length ; j++) {
            if (strs[j].indexOf(temp) !== 0) {
                return ret
            }
        }
        ret = temp
    }

    return ret
};

