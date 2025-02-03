/*
Given an array of size n, sort the array using Merge Sort.
*/

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return arr;
}

function mergeSort(arr, low, high) {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  merge(arr, low, mid, high);

  return arr;
}

function main(arr) {
  const clone = arr.slice();
  const n = clone.length;
  console.log(mergeSort(clone, 0, n - 1));
}

main([4, 2, 1, 6, 7]);
