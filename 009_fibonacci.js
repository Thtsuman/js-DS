// print n number of fibonacci number;
// eg N = 3, output => 2

function fibonacci(n) {
    let arr = [0, 1];
    for(let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr;
}

function main(n) {
    const fibonacciArr = fibonacci(n)
    console.log(fibonacciArr[n])
}

main(3)