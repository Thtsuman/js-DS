// print n to 1 with recursion but with backtracking

function recursion(i, n) {
    if(i > n) {
        return;
    }

    recursion(i + 1, n) 
    console.log(i)
}

function main(n) {
    recursion(1 , n)
}

main(5)