function moveVowel(str) {
  var arr = str.split("");
  var vowels = "";
  for (var i = 0; i < arr.length; i++) {
    if (/[aeiou]/i.test(arr[i])) {
      vowels += arr[i];
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join("") + vowels;
}

// Solution 2

function moveVowel(input) {
  var vow = input.match(/[aeiou]/gi) || [];
  var conso = input.match(/[^aeiou]/gi) || [];
  return conso.concat(vow).join("");
}


// Solution 3

function moveVowel(input) {
  return input.replace(/[aeiou]+/g,"") + input.replace(/[^aeiou]+/g,"")
}