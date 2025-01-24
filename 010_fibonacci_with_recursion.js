/*
    print fibonacci value of N, with the help of recursion
*/

/* 
    every n will call 2 recursion function
    so we can say its 2^n

    so TC = O(2^n)

*/

function fibonacci(n) {
    if(n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n-2)
}

function main(n) {
    console.log(fibonacci(n))
}

main(6)