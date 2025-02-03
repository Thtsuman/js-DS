/*
  Problem Statement: Given an array of N integers, write a program 
  to implement the Insertion sorting algorithm.
*/

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// TC = O(n^2)
function insertion_sort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j, j - 1);
      j--;
    }
  }

  return arr;
}

function main(arr) {
  const clone = arr.slice();
  const n = arr.length;

  console.log(insertion_sort(clone, n));
}

main([64, 34, 25, 12, 22, 11, 90]);
