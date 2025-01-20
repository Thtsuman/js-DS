/*
        A
       ABA
      ABCBA
     ABCDCBA
    ABCDEDCBA
    
analyze
5 rows  
9 column

[4,1,4]
[3,3,3]
[2,5,2]
[1,7,1],
[0,9,0]
*/ 


function drawPattern(n) {
    let pattern = ''

    for(let i=0; i<n; i++) {
        // space
        for(let j=0; j < n - i - 1; j++) {
            pattern += '_'
        }
        // character
        let inc = 0;
        let breakpoint = (2*i*1) / 2;   
        for(let j=0; j < 2 * i + 1; j++) {
            pattern += String.fromCharCode(97 + inc).toUpperCase()
            if(j >= breakpoint) {inc -= 1}
            else {inc += 1}
        }
        //space
        for(let j=0; j < n - i - 1; j++) {
            pattern += '_'
        }
        pattern += '\n'
    }

    console.log(pattern)
}

drawPattern(5)


