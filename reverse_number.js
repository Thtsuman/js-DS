/*
Write a program to generate the reverse of a given number N. 
Print the corresponding reverse number.

Note : If a number has trailing zeros, then its reverse will not 
include them. For e.g., reverse of 10400 will be 401 instead of 00401.

*/

function reverseNumber(n) {
    let reverse = 0;
    while(n > 0) {
        let lastDigit = n % 10;
        n = Math.floor(n / 10);

        reverse = (reverse * 10) + lastDigit
    }

    return reverse;
} 


console.log(reverseNumber(-10400))