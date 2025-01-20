/*
    find the factorial number of N with recursion function
    eg: N = 3, output = 6
        N = 4, output = 24
*/

// print at the end of the recursion
function factorial(n , total) {
    if(n < 1) {
        console.log(total)
        return;
    }

    factorial(n - 1, total * n)
}

// return a value from the recursive function
function factorialWithReturn(n) {
    if(n == 1) {
        return 1;
    }

    return n * factorialWithReturn(n - 1)
}

function main(n) {
    // factorial(n, 1)
    console.log(factorialWithReturn(n))
}

main(4)