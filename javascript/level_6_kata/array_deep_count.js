/*
https://www.codewars.com/kata/596f72bbe7cd7296d1000029/

Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

For example:

deepCount([1, 2, 3]);
//>>>>> 3
deepCount(["x", "y", ["z"]]);
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);
//>>>>> 7
*/

// solution 1

function deepCount(arr, count=0) {
    for(var i = 0; i < arr.length; i++) {
      count++;
      console.log(arr, count)
      if(Array.isArray(arr[i])){
        count+= deepCount(arr[i])
      }
    }
    return count
  }


// solution 2

function deepCount(arr, count=0) {
    return arr.reduce((count,b) => {
       if(Array.isArray(b)){
         return deepCount(b, ++count)
       }
       else {
         return ++count
       }
     }, count )
   }

