/*
    Given an array of N integers, write a program to implement the Bubble Sorting algorithm.
*/

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// time complexity is O(n^2)
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  // loop till arr length - 1
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    // loop till arr length - upper loop - 1 coz of the comparison
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (swapped === false) break;
  }
  return arr;
}

function main(arr) {
  const clone = arr.slice();
  console.log(bubbleSort(clone));
}

main([64, 34, 25, 12, 22, 11, 90]);
