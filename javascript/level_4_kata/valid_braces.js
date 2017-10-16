function validBraces(str) {
    var opening = ["(", "[", "{"];
    var closing = [")", "]", "}"];
    str = str.split("")
  
    if(opening.indexOf(str[0]) === -1 || closing.indexOf(str[str.length - 1]) === -1){
        return false
    }
  
    for (var i = 0; i < str.length - 1; i++) {
      var checker = false;
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
