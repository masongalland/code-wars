/*
I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

*/

function stringBreakers(n, string){
    string = string.replace(/\s/g, '')
    var answer = ""
    for (var i = 0; i < string.length; i+= n){
      let ending = i + n < string.length ? "\n" : ""
      answer += string.slice(i, i+n) + ending
    }
    return answer
  }