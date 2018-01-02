//not done yet

  //if first element is not an opening brace and if last element is not a closing brace, return false.
  //loop through string until you find matching brace.
  //if length of contents inside matching braces is odd, return false
  //if length is even, loop through contents and check for same thing
  //once inner loop is finished, set outer loop's i variable to one more than the index of the matched brace, and continue


var opening = ["(", "[", "{"];
var closing = [")", "]", "}"];

function looper(arr){
  let oi = opening.indexOf(arr[0]);
  let ci = closing.indexOf(arr[arr.length - 1])
  if(arr.length === 0) {
    return 1
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
    console.log(test)
    if(test === false){
      return false;
    }else {
      j = test + j;
    }

  }
  return true;
}

