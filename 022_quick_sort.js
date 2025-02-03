/*
    Given an array of n integers, sort the array using the Quicksort method.
*/

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high) {
      i++;
    }

    while (arr[j] > pivot && j >= low) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }

  swap(arr, low, j);

  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }

  return arr;
}

function main(arr) {
  let clone = arr.slice();
  let n = clone.length;

  console.log(quickSort(arr, 0, n - 1));
}

main([13, 46, 9, 24, 24, 52, 20, 9]);
