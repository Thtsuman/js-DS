/*
Check whether a given number ’n’ is a palindrome number.

Note :
Palindrome numbers are the numbers that don't change when reversed.
You don’t need to print anything. Just implement the given function.
Example:
Input: 'n' = 51415
Output: true
Explanation: On reversing, 51415 gives 51415.

*/

function checkPalindrome(n) {
    const original = n
    let reverse = 0;

    while(n > 0) {
        let lastDigit = n % 10;
        n = Math.floor(n / 10)
        reverse = (reverse * 10) + lastDigit
    }

    if(reverse === original) return true
    return false
}

console.log(checkPalindrome(121))