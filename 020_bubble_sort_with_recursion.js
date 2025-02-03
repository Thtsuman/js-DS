/*
Given an array of N integers, write a program to 
implement the Recursive Bubble Sort algorithm.
*/

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// TC = O(n^2) (worst) || O(n) best
// SC = O(n)
function bubble_sort(arr, n) {
  if (n === 1) return;

  let swapped = false;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      swapped = true;
    }
  }

  if (swapped === false) return arr;

  bubble_sort(arr, n - 1);

  return arr;
}

function main(arr) {
  let clone = arr.slice();
  let n = clone.length;

  console.log(bubble_sort(arr, n));
}

// main([13, 46, 24, 52, 20, 9]);
main([1, 2, 3, 4, 5]);
