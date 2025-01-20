/*
Given an integer ‘N’, your task is to write a program that returns all the 
divisors of ‘N’ in ascending order.

For example:
'N' = 5.
The divisors of 5 are 1, 5.
*/

function printDivisor(n) {
  let divisors = [];
  // i * i => sqrt(n)
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
        divisors.push(i)

        if(n / i !== i) {
            divisors.push(n / i)
        }
    };
  }

  divisors.sort((a, b) => a - b)

  return divisors;
}

// console.log(printDivisor(5));
console.log(printDivisor(35));


// TC => O(sqrt(n))
