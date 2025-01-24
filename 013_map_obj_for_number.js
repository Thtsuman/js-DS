/*
    store iteration of a number in an array in map and print out map
*/

function main(arr, queries) {
  var mapHash = new Map();

  for (let i = 0; i < arr.length; i++) {
    mapHash.set(arr[i], (mapHash.get(arr[i]) || 0) + 1);
  }

  // print mapHash
  mapHash.forEach((value, key) => {
    console.log({ key, value });
  });

  // sort mapHash
  // one method
  var mapHashSorted1 = new Map([...mapHash.entries()].sort());
  // second method
  var mapHashSorted2 = Array.from(mapHash).sort((a, b) => a[1] - b[1])
  console.log({ mapHashSorted1, mapHashSorted2, mapHash });

  let ans = {};
  for (let i = 0; i < queries.length; i++) {
    ans[queries[i]] = mapHash.get(queries[i]) || 0;
  }

  console.log(ans);
}

main([1, 4, 12, 3, 5, 5, 1, 3, 12, 3], [1, 5, 12, 110]);
