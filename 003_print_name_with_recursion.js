function recursion(i , n) {
    if( i > n ) {
        return;
    }

    console.log('Name')
    recursion(i+1, n)
}

function main(n) {
    recursion(1, n);
}

main(5)

/*
    the function is calling N time, so
    TC = O(n)
    Space Complexity = O(n) => coz in each function call we are 
    taking space in the stack
*/