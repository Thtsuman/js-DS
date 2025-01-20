/*
    * * * * * * 
    * *     * * 
    *         * 
    *         * 
    * *     * * 
    * * * * * * 

    analyze
    n = 3
    rows 6
    column = 6
    
    [3,0,3]
    [2,2,2]
    [1,4,1]
    -------
    [1,4,1]
    [2,2,2]
    [3,0,3]
*/

function drawPattern(n) {
  let pattern = "";
  let initS = 0;
  for (let i = 0; i < n; i++) {
    //stars
    for (let j = 0; j < n - i; j++) {
      pattern += "*";
    }
    //space
    for (let j = 0; j < initS; j++) {
      pattern += "_";
    }
    //stars
    for (let j = 0; j < n - i; j++) {
      pattern += "*";
    }
    initS += 2;

    pattern += "\n";
  }

  initS = 2 * n - 2;
  for (let i = 1; i <= n; i++) {
    //stars
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    //space
    for (let j = 0; j < initS; j++) {
      pattern += "_";
    }
    //stars
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    initS -= 2;

    pattern += "\n";
  }

  console.log(pattern);
}

drawPattern(3);
