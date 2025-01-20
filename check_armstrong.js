/*
You are given an integer 'n'. Return 'true' if 'n' is an Armstrong number, and 
'false' otherwise.

An Armstrong number is a number (with 'k' digits) such that the sum of its digits raised to 'kth' 
power is equal to the number itself. 
For example, 371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371.

*/

function checkArmstrong(n) {
  let sum = 0;
  let original = n;
  // find out length of the n
  let length = String(n).length;

  // check if its a armstrong number
  while (n > 0) {
    let lastDigit = n % 10;
    sum += Math.pow(lastDigit, length);
    n = Math.floor(n / 10);
  }

  if (sum === original) return true;
  return false;
}

console.log(checkArmstrong(1))
// console.log(checkArmstrong(1634));
