//best answer

function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

//My very long answer.



var opening = ["(", "[", "{"];
var closing = [")", "]", "}"];
var cc = [];

function looper(arr){
  console.log(arr)
  let oi = opening.indexOf(arr[0]);
  let ci = closing.indexOf(arr[arr.length - 1])
  if(arr.length === 0) {
    return 1;
  }
  if(oi === -1 || ci === -1){
    return false;
  }

  for (let i = 1; i < arr.length; i++) {
    if(closing.indexOf(arr[i]) === oi){
      if(arr.slice(1, i).length % 2 !== 0){
        return false;
      }else {
        //recurse
        cc.push(i);
        return looper(arr.slice(1, i))
        break;
      }
    }
    if(i === arr.length - 1){
      if(closing.indexOf(arr[i]) !== oi){
        return false
      } else {
        return i;
      }
    }
  }
}

function validBraces(str) {
  str = str.split("")
  var answer = true;

  for (var j = 0; j < str.length - 1; j++) {
    let test = looper(str.slice(j))
    if(test === false){
      return false;
    }else {
      if(cc.length === 0) cc.push(1)
      j = cc[0] + j;
      cc = []
    }

  }
  return true;
}

