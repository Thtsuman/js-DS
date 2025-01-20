/*
GCD = Greatest Common Divisor
HCF = Highest Common Factor

Calculate and return GCD(Greatest Common Divisor) of two given numbers x and y.

Note :
Numbers should be in range of Integer.

Sample Input 1:
n1=20 n2=5
Sample Output 1:
5

why =>  divisors of 5 => 1,5
        divisor of 20 => 1, 4, 5, 10, 20

        common between two divisors = [1, 5]
        highest or greatest divisor will be 5
*/  

// linear time complexity => 0(min(n1, n2))
function findGCD(n1, n2) {
    let gcd = 1;
    for(let i = Math.min(n1, n2); i >= 1; i++) {
        if(n1 % i === 0 && n2 % i === 0) {
            gcd = i
            break;
        }
    }

    return gcd;
}

// with equilateral algo
/*
    eq algo state that gcd(a, b) = gcd(a-b, b) where a > b;
    
    to minimize the loop we can also do division
    gcd(a, b) = gcd(a%b , b) where a > b;
*/
// time complexity with eq algo => 0(log@(min(n1, n2))) => O of log phi(the number in which its dividing is 
// changing thats why we are using phy *@) 
function findGCDWithEq(a, b) {
    while(a > 0 && b > 0) {
        if(a>b) {
            a = a % b;
        }else if (b > a) {
            b = b % a;
        }
    }

    if(a === 0) return b
    else return a;
}

// console.log(findGCD(20, 5))
console.log(findGCDWithEq(20, 5))