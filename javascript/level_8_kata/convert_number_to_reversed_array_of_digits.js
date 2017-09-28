/*
Given a random number,
You have to return the digits of this number within an array in reverse order.

Example:

348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
  return n.toString().split("").reverse().map(function(i){
    return parseInt(i);
  });
}


function digitize2(n){
  var str = n.toString();
  var arr = [];
  for(var i = 0; i < str.length; i++){
    var num = Number(str[i])
    arr.unshift(num)
  }
  return arr;
}


function digitize3(n){
  var str = n.toString();
  var arr = [];
  for(var i = str.length -1; i >= 0; i--){
    var num = Number(str[i])
    arr.push(num)
  }
  return arr;
}
 

var test = digitize3(348597);
test
