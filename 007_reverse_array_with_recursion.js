/*
    reverse an array using recursion
*/

function swap(list, i, k) {
  let temp = list[i];
  list[i] = list[k];
  list[k] = temp;
}

function reverse(arr, i) {
  if (i >= arr.length / 2) return;
  swap(arr, i, arr.length - i - 1);
  reverse(arr, i+1);
}

function main(arr) {
  let cloneArr = arr.slice();

  reverse(cloneArr, 0);

  console.log(cloneArr);
}
main([1, 2, 3, 4, 5]);
