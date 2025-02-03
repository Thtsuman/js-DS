/*
    Given an array of N integers, write a program to 
    implement the Recursive Insertion Sort algorithm.
*/

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// TC = O(n^2) (worst) || O(n) best
// SC = O(n)
function insertion_sort(arr, n, i) {
  if (i === n) return;

  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    swap(arr, j - 1, j);

    j--;
  }

  insertion_sort(arr, n, i + 1);

  return arr;
}

function main(arr) {
  let clone = arr.slice();
  let n = clone.length;

  console.log(insertion_sort(arr, n, 0));
}

main([13, 46, 24, 52, 20, 9]);
