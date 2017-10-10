function moveVowel(str) {
    var arr = str.split("")
    var vowels = "";
    for(var i = 0; i < arr.length; i++){
      if(/[aeiou]/i.test(arr[i])){
        vowels += arr[i];
        arr.splice(i, 1);
        i--
      }
    }
    return arr.join("") + vowels
  }