/*
    fetch how many time a char appears in an string, with hash method
*/

function main(str, queries) {
    let hash = {}
    // create a hash obj
    str.split('').map(char => {
        hash[char] = (hash[char] || 0) + 1
    })

    let ans = {}
    // create the queries obj
    queries.forEach(item => {
        ans[item] = hash[item] || 0
    })

    console.log(ans)
}

main('hello', ['l', 'o', 'a'])