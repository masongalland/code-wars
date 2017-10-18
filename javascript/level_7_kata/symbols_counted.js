/*
In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

Example: abbreviation => a2b2revi2ton
*/


function transform(str) {
  var copy = "";
  for (var i = 0; i < str.length; i++) {
    var regEx = new RegExp(str[i], "g");
    var count = str.match(regEx).length;
    var toAdd = count > 1 ? str[i] + count : str[i];
    copy += copy.includes(toAdd) ? "" : toAdd;
  }
  return copy;
}
