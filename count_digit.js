/*
You are given a number ’n’.
Find the number of digits of ‘n’ that evenly divide ‘n’.

Note:
A digit evenly divides ‘n’ if it leaves no remainder when dividing ‘n’.

Example:
Input: ‘n’ = 336

Output: 3

Explanation:
336 is divisible by both ‘3’ and ‘6’. Since ‘3’ occurs twice it is counted two times.

*/

function countDigit(n) {
  const original = n;
  let count = 0;

  while (n > 0) {
    const lastDigit = n % 10;
    console.log({ n, lastDigit });
    if (lastDigit !== 0 && original % lastDigit === 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }

  return count;
}

console.log(countDigit(336))
// console.log(countDigit(35));
// console.log(countDigit(373));
