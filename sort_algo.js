function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selection_sort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    swap(arr, i, min);
  }
  return arr;
}

function bubble_sort(arr, n) {
  let swapped = false;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j);
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

function insertion_sort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let j = i;

    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(arr, j, j - 1);
      j--;
    }
  }

  return arr;
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low,
    right = mid + 1;

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

function merge_sort(arr, low, high) {
  if (low === high) return;

  let middle = Math.floor((low + high) / 2);
  merge_sort(arr, low, middle);
  merge_sort(arr, middle + 1, high);

  merge(arr, low, middle, high);

  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low,
    j = high;

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

function quick_sort(arr, low, high) {
  if (low < high) {
    let pIndex = partition(arr, low, high);

    quick_sort(arr, low, pIndex - 1);
    quick_sort(arr, pIndex + 1, high);
  }

  return arr;
}

function main(arr) {
  const n = arr.length;
  const clone = arr.slice();

  // console.log(selection_sort(clone, n));
  // console.log(bubble_sort(clone, n));
  // console.log(insertion_sort(clone, n));
  // console.log(merge_sort(clone, 0, n - 1));
  console.log(quick_sort(clone, 0, n - 1));
}

main([64, 34, 25, 12, 22, 11, 90]);
