/*
An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.
*/


function isHollow(x){  
    
    while(x.length > 2 && x[0] !== 0 && x[x.length-1] !== 0){
      x.shift();
      x.pop();
    }
    
    return x.length > 2 && x.every(i => i === 0);
  }