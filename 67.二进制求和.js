/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (50.59%)
 * Likes:    363
 * Dislikes: 0
 * Total Accepted:    82.1K
 * Total Submissions: 156K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aArr = a.split('')
  let bArr = b.split('')
  let result = '', into = false

  while(aArr.length && bArr.length) {
    let a = aArr.pop()
    let b = bArr.pop()

    if (a === '1' && b === '1') {
      if (into) {
        result = '1' + result
      } else {
        result = '0' + result
      }

      into = true
    } else {
      if (a === b) {
        if (into) {
          result = '1' + result
        } else {
          result = '0' + result
        }

        into = false
      } else {
        if (into) {
          result = '0' + result

          into = true
        } else {
          result = '1' + result

          into = false
        }
      }
    }
  }

  while(aArr.length) {
    let a = aArr.pop()

    if (a === '1' && into) {
      result = '0' + result
      into = true
    } else {
      if (into) {
        result = '1' + result
      } else {
        result = a + result
      }

      into = false
    }
  }

  while(bArr.length) {
    let b = bArr.pop()

    if (b === '1' && into) {
      result = '0' + result
      into = true
    } else {
      if (into) {
        result = '1' + result
      } else {
        result = b + result
      }

      into = false
    }
  }

  if (into) {
    return '1' + result
  } else {
    return result
  }
};
// @lc code=end

