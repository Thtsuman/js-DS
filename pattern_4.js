/*
    * * * *
    *     *
    *     *
    * * * *  

    analyze
    n = 4
    rows 4
    column = 4
    

*/

function drawPattern(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if(i === 0 || j === 0 || i === n-1 || j === n-1) {
            pattern += '*'
        }
        else pattern += '_'
    }
    pattern += '\n'
  }

  console.log(pattern);
}

drawPattern(5);
