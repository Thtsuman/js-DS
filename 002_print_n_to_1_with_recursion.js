function recursion(n, i) {
    if( n < 1 ) {
        return;
    }

    console.log(n) 
    recursion(n-1, i)
}

function main(n) {
    recursion(n, n)
}

main(5)