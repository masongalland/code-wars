/*  https://www.codewars.com/kata/string-incrementer/javascript

Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (str) {
  const re = /(^[a-zA-Z]*)(\d*)/

  return str.replace(re, (match, p1, p2) => {
    if(p2 === "") return p1+"1";
    let length = p2.length;
    let num = +p2 + 1;
    let diff = num.toString().length - length;
    if(diff < 0) {
      num = "0".repeat(Math.abs(diff)) + num
    }
    return p1 + num
  })

}