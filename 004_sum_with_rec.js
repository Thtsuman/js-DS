/*
    find the sum of N with recursion
    eg: N = 3, output will be 6 as 1+2+3=6 
*/

// parameterized ans where we keep adding i into a total 
// and in the end we print out the total in the end of the 
// recursion
function sum(i, total) {
    if(i < 1) {
        console.log(total)
        return;
    }

    sum(i - 1, total + i)
}

// sometime we need to return a value not just print it in
// the recursion itself
function sumWithReturn(n) {
    if(n === 0) {
        return 0;
    }

    return n + sumWithReturn(n - 1)
}

function main(n) {
    // sum(n , 0)
    console.log(sumWithReturn(n))
}

main(3)