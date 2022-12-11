// Question:- Given an integer n, return the number of trailing zeroes in n!.

//             Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

//             Example 1:
//             Input: n = 3
//             Output: 0
//             Explanation: 3! = 6, no trailing zero.
            
//             Example 2:
//             Input: n = 5
//             Output: 1
//             Explanation: 5! = 120, one trailing zero.
            
//             Example 3:
//             Input: n = 0
//             Output: 0

var trailingZeroes = function(n) {
    let zeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        zeroes += Math.floor(n / i);
    }
    return zeroes;
    
};
console.log(trailingZeroes(5))

