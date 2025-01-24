/*
    fetch how many time a number appears in an array, with hash method
*/

function main(arr, queries) {
  // create a hash array
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1;
  }

  let ans = {};
  // create the queries
  for (let i = 0; i < queries.length; i++) {
    ans[queries[i]] = hash[queries[i]] || 0;
  }

  console.log(ans);
}

main([1, 2, 3, 1, 3, 1], [1, 3, 12]);
