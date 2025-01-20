/*
    4444444
    4333334
    4322234
    4321234
    4322234
    4333334
    4444444

    analyze
    n = 4
    rows 7
    column = 7

    loop will go 2n-1

    find the distance in all side, then pick the minimum and then minus the n
    

*/

function drawPattern(n) {
    let pattern = "";
    for (let i = 0; i < 2*n-1; i++) {
      for (let j = 0; j < 2*n-1; j++) {
          let top = i;
          let left = j;
          let bottom = (2*n - 2) - i;
          let right = (2*n - 2) - j;

          pattern += n - Math.min(top, left, bottom, right)

      }
      pattern += '\n'
    }
  
    console.log(pattern);
  }
  
  drawPattern(4);
  