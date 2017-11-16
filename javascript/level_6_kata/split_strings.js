/*

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

*/

var _ = require("lodash");

function solution(str) {
  let arr = _.chunk(str, 2).map(e => e.join(""));
  if (arr[arr.length - 1].length === 1) {
    arr[arr.length - 1] += "_";
  }
  return arr;
}

//better solution:

function solution(str) {
  return (str + "_").match(/../g);
}
