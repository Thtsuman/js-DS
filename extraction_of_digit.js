function extraction(n) {
    let arr = []
    while(n>0) {
        let lastDigit = n % 10
        arr.push(lastDigit)
        
        n = Math.floor(n / 10)
    }

    console.log(arr)
}

extraction(7745)
