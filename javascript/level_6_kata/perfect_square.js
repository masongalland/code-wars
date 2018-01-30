/*
Task
Write function which validate string input.If string is a perfect square return true,false otherwise.

What is perfect square?
We assume that charcater "."(dot) is a perfect square 1x1.

-Perfect square is only build from "." characters.It cant contain any other characters beside "." and "\n" (Line feed).
-Square must have same width and height -> cpt.Obvious
-Square size is random!
Function input:
var perfectSquare = "...\n...\n...";

console.log(perfectSquare) -> `...
                               ...
                               ...`

var notPerfect = "..,\n..\n...";

console.log(notPerfect) ->    `..,
                               ..
                               ...`
*/

function perfectSquare(str) {
    const arr = str.split("").filter(e => e !== "." && e !== "\n");
    const sqrArr = str.split("\n");

    if(arr.length > 0) return false;

    return sqrArr.every((e,i,a) => e.length === a[0].length && e.length === a.length)
  }