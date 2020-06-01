/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ret = 0, temp = x
    if (x < 0) {
        temp = temp * -1
    }
    while ( temp/10 >= 0.1 ) {
        ret *= 10
        ret += temp % 10
        temp = Math.floor(temp / 10)
    }
    if (ret > 2 ** 31 -1) {
        return 0
    }
    if (x < 0) {
        ret = ret * -1
    }
        
    return ret
};

