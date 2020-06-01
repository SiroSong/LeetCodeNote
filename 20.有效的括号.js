/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (39.63%)
 * Likes:    1112
 * Dislikes: 0
 * Total Accepted:    134.6K
 * Total Submissions: 338.7K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const couple = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const sarray = s.split('')
    let stack = []
    const a = sarray.every((key, index, arr) => {

        if (arr.length < 2) {
            return false
        }

        if (couple[key] === undefined) {
            stack.push(key)
            if (index === arr.length -1 || stack)
            return true
        } else {
            if (stack.pop() == couple[key]) {
                return true
            } else {
                return false
            }
        }
    })
    const b = stack.length === 0? true: false
    return a && b
};
// @lc code=end

