/*
    reverse an array using for loop and then with while loop
*/

// with for loop
function reverseArr(arr) {
    let newArr = []
    for(let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        newArr[i] = arr[j]
    }
    return newArr;
}

// with while loop
function reverseArrWithWhile(arr) {
    let newArr = [],
        cloneArr = arr.slice(); // cloning the arr
    while(cloneArr.length) {
        newArr.push(cloneArr.pop()) // pop from the clone arr and push it to the new arr
    }

    return newArr;
}

function main(arr) {
    // console.log(reverseArr(arr))
    console.log(reverseArrWithWhile(arr))
}

main([1,3,4,5,3])