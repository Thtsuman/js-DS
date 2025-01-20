/*
    *         *
    * *     * *
    * * * * * *
    * *     * *
    *         *

    analyze
    n = 3
    rows 5
    column = 6
    
    [1,4,1]
    [2,2,2]
    [3,0,3]
    [2,2,2]
    [1,4,1]
*/

function drawPattern(n) {
  let pattern = "";
  let spaces = 2*n - 2
  for (let i = 1; i <= 2 * n - 1; i++) {
    
    let stars = i
    if(i > n) { stars = 2*n - i}
    
    //stars
    for (let j = 1; j <= stars; j++) {
      pattern += "*";
    }
    
    //space
    for (let j = 1; j <= spaces; j++) {
      pattern += "_";
    }
    
    //stars
    for (let j = 1; j <= stars; j++) {
      pattern += "*";
    }

    if(i < n) { spaces -= 2}
    else {spaces += 2}

    pattern += "\n";
  }

  console.log(pattern);
}

drawPattern(5);
