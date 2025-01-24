/*
    Problem Statement: Given an array of size N. Find the highest and 
    lowest frequency element.

    Example 1:
    Input: array[] = {10,5,10,15,10,5};
    Output: 10 15
    Explanation: The frequency of 10 is 3, i.e. the highest and the 
    frequency of 15 is 1 i.e. the lowest.

    Example 2:

    Input: array[] = {2,2,3,4,4,2};
    Output: 2 3
    Explanation: The frequency of 2 is 3, i.e. the highest and the 
    frequency of 3 is 1 i.e. the lowest.
*/

function main(arr) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1);
  }

  // sort the hashMap
  let hashMapSorted = Array.from(hashMap).sort((a, b) => a[1] - b[1]);

  console.log({
    lowest: hashMapSorted[0],
    highest: hashMapSorted[hashMapSorted.length - 1],
  });
}

main([10, 5, 10, 15, 10, 5]);
