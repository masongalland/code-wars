/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  for(var i=0; i<A.length; i++){
    var newArr = A.filter(function(value){
                  return value === A[i];
                });
    if(newArr.length % 2 !== 0){
      return newArr[0];
    }
  }
}