/*  https://www.codewars.com/kata/duplicate-encoder/javascript

The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

*/

function duplicateEncode(str){
  let newStr = ""
  for(let i = 0; i < str.length; i++){
    let regex = /[(())]/.test(str[i])
              ? new RegExp("\\" + str[i], "gi")
              : new RegExp(str[i], "gi")

    let count = str.match(regex).length
    if(count > 1){
      newStr += ")"
    }
    else{
      newStr += "("
    }
  }
  return newStr;
}

// cleaner solution:

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}