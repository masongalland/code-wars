/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice that d and e also occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alpahabet for each word. For example, solve(["abode","ABc","xyzD"]) = [4,3,1]. See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

Pseudo Code:

0. create variable equal to empty array.
1. loop through array.
2. change string to lowercase.
3. create counter variable equal to 0 inside outer loop. 
4. loop through characters in strings.
5. check the index of each character against charCodeAt() - 97.
6. if the index matches the character code, increment counter variable. 
7. after nested loop, push counter value to the array created in step 0.
8. at the end of the outer loop, return the array.

*/

function alphaSym(arr){
  let answer = [];
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toLowerCase()
    var counter = 0;
    for(let j = 0; j < arr[i].length; j++){
      if(j === arr[i].charCodeAt(j) - 97){
        counter++
      }
    }
    answer.push(counter)
  }
  return answer;
}