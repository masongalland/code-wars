/*  https://www.codewars.com/kata/simple-max-digit-sum/javascript

In this Kata, you will be given an integer n and your task will be to return the largest integer that is <= n and has the highest digit sum.

For example:

solve(100) = 99. Digit Sum for 99 = 9 + 9 = 18. No other number <= 100 has a higher digit sum.
solve(10) = 9
solve(48) = 48. Note that 39 is also an option, but 48 is larger.
More examples in the test cases.

Good luck!
*/

function solve(n){
  let arr = n.toString().split("").map(Number);
  let flag = null;
  let mapped = arr.map((e,i,a) => {
    if (flag !== null && i > flag){
      return 9;
    }
    if(a[i + 1] != 9 && flag === null){
      flag = i;
      return e - 1;
    }
    else return e
  })

  let sumLessThan = mapped.reduce((a,b) => a + b)
  let sumN = arr.reduce((a,b) => a + b)
  return sumN >= sumLessThan ? n : +mapped.join("");
}