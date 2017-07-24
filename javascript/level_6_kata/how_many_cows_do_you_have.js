/*
Consider having a cow that gives a child every year from her fourth year of life on and all her subsequent children do the same.

After n years how many cows will you have?

countCows(0); // should equal 1
countCows(1); // should equal 1
countCows(3); // should equal 2
countCows(4); // should equal 3
countCows(10);// should equal 28
Return null if n is not an integer.
*/

function countCows(n){
  var mothers = 1;
  var children = 0;
  var kids3Yearsago = [];
  if((n % 1 !== 0) || (n.length<1)){
    return null;
  }
  if(n>2){
    for(var i = 3; i<=n; i++){
      kids3Yearsago.push(mothers);
      if (i >= 6) {
        mothers += kids3Yearsago[i - 5] //increase by children added 3 years ago
      }
      children += mothers;
    }
  }
  return children + 1;
}