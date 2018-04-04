/*  https://www.codewars.com/kata/convert-string-to-camel-case/javascript
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
*/

const toCamelCase = (str) => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());



function toCamelCase(str){
  let arr = str.split(/[-_]/);
  for(let i = 1; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
  }
  return arr.join("")
}
