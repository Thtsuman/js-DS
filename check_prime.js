/*
Given an integer, check if it is prime or not. 
Return True if the number is prime, otherwise False.

eg: 4 => false (1,2,4)
    5 => true (1,5)
    11 => true (1, 11)

Note:
No need to print anything; it has already been handled.
*/

function checkPrime(n) {
    let count = 0;
    for(let i = 1; i * i <= n; i++) {
        if(n % i === 0) {
            count++;
            if(n/i !== i) {
                count++;
            }
        }
    }

    if(count === 2) return 'true'
    return 'false'
}


console.log(checkPrime(4))