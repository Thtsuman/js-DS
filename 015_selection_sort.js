/*
    sort an array with selection sort

    explanation: 
    go each of the element and find the minimum value and 
    swap it in that index till the array is n-2
*/

function swap(arr, first, second) {
  let temp;
  temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}


// time complexity O(n^2)
function selectionSort(arr) {
  const n = arr.length
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

function main(arr) {
  let clone = arr.slice();
  console.log(selectionSort(clone));
}

main([2, 6, 10, 3, 1, 7]);
