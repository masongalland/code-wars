/*  https://www.codewars.com/kata/counting-duplicates/javascript

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function countDuplicates(str){
  str = str.toLowerCase()
  let dups = [];
  for(let i = 0; i < str.length; i++){
    let dup = str.indexOf(str[i]) == str.lastIndexOf(str[i]);
    if(!dup && !dups.includes(str[i])){
      dups.push(str[i])
    }
  }
  return dups.length
}

// cleaner solution:

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/(.)\1+/g) || []).length;
}