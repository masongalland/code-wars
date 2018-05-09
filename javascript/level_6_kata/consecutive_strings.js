/*  https://www.codewars.com/kata/consecutive-strings/javascript

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

function longestConsec(arr, k){
  if(arr.length === 0 || k > arr.length || k <= 0){
    return "";
  }

  let word,
      maxLength = 0;

  for(let i = 0; i < arr.length; i++){
    let concat = arr.slice(i, i + k).join("");
    if(concat.length > maxLength){
      word = concat;
      maxLength = concat.length
    }
  }
  return word;
}

// cleaned up:

function longestConsec(strarr, k) {
  var longest = "";
  for(var i=0;k>0 && i<=strarr.length-k;i++){
    var tempArray = strarr.slice(i,i+k);
    var tempStr = tempArray.join("");
    if(tempStr.length > longest.length){
      longest = tempStr;
    }
  }
  return longest;
}