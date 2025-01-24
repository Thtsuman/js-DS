/*
    check for palindrome for a string
    eg: MADAM => output: true
*/

function checkPalindrome(str, i) {

    if(i >= str.length / 2) return true;

    if(str[i] !== str[str.length - 1 - i]) {
        return false
    }

    return checkPalindrome(str, i + 1)
}

function main(str) {
    console.log(checkPalindrome(str, 0))
}

main('11122111')