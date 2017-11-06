/*
Write a function that got passing in 3 sides of a triangle. Check if those sides are valid sides of a triangle base on Triangle Inequality Theorem. The function should return true if those 3 sides are valid, false if they are not.
*/

function insert(a,b,c){
    return a + b <= c ? false : a + c <= b ? false: b + c <= a ? false : true
  }