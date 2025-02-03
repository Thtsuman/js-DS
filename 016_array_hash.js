/*
You are given an array arr[] containing positive integers. The elements in 
the array arr[] range from 1 to n (where n is the size of the array), and some 
numbers may be repeated or absent. Your task is to count the frequency of 
all numbers in the range 1 to n and return an array of size n such that result[i] 
represents the frequency of the number i (1-based indexing).
*/

function frequencyCount(arr) {
    let ans = [];
    for(let i = 1; i<=arr.length; i++) {
        let count = 0;
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === i) {
                count = count+1
            };
        }
        ans[i-1] = count;
    }
    return ans
}

function main(arr) {
    console.log(frequencyCount(arr)) 
}

main([1,2,3,2,5])