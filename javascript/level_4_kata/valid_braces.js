//not done yet

function validBraces(str) {
    var opening = ["(", "[", "{"];
    var closing = [")", "]", "}"];
    str = str.split("")

    if(opening.indexOf(str[0]) === -1 || closing.indexOf(str[str.length - 1]) === -1){
        return false
    }

    for (var i = 0; i < str.length - 1; i++) {

      var openIndex = opening.indexOf(str[i]);
      if (openIndex != -1) {
        for (var j = i + 1; j < str.length; j++) {
          if (str[j] === closing[openIndex]) {
            checker = true;
            str.splice(j, 1)

            break;
          }
        }
      }
      if (!checker) {
        console.log(i)
        return false;
      }
    }
    return true;
  }


  //If the matching closing brace is not the next item in the array, we need to make sure there are only matching items inside


  //if first element is not an opening brace and if last element is not a closing brace, return false.
  //loop through string until you find matching brace.
  //if length of contents inside matching braces is odd, return false
  //if length is even, loop through contents and check for same thing
  //once inner loop is finished, set outer loop's i variable to one more than the index of the matched brace, and continue


  function validBraces(str) {
    var opening = ["(", "[", "{"];
    var closing = [")", "]", "}"];
    str = str.split("")
    var answer = true;

    if(opening.indexOf(str[0]) === -1 || closing.indexOf(str[str.length - 1]) === -1){
        return false
    }

    for (var i = 0; i < str.length - 1; i++) {


    }
    return true;
  }

  function looper(arr){
    let oi = opening.indexOf(arr[0]);
    let subAnswer = true
    for (let i = 1; i < arr.length; i++) {
      if(closing.indexOf(arr[i]) === oi){
        if(arr.slice(1, i).length % 2 !== 0){
          subAnswer = false;
        }else {
          //recurse
          looper(arr.slice(1, i))
        }
      }
      if(i === arr.length - 1 && closing.indexOf(arr[i]) !== oi){
        subAnswer = false
      }
    }
    answer = subAnswer;
  }