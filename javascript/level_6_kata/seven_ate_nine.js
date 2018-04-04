/*
Seven is a hungry number and its favourite food is number 9. Whenever it spots 9 through the hoops of 8, it eats it! Well, not anymore, because you are going to help the 9 by locating that particular sequence (7,8,9) in an array of digits and tell 7 to come after 9 instead. Seven "ate" nine, no more! (If 9 is not in danger, just return the same array)


Test.describe("Tests", function(){
Test.assertSimilar(hungrySeven([7,8,9]), [8,9,7]);
Test.assertSimilar(hungrySeven([7,7,7,8,9]),[8,9,7,7,7]);
Test.assertSimilar(hungrySeven([8,7,8,9,8,9,7,8]),[8,8,9,8,9,7,7,8]);
Test.assertSimilar(hungrySeven([8,7,8,7,9,8]),[8,7,8,7,9,8]);
});

*/

const hungrySeven = a => {
  let s = a.join("").toString();
  if (!s.match(["789"])) {
    return a;
  } else {
    s = s.replace(/789/gi, "897").split("");
    s = s.map(c => c * 1);
    return hungrySeven(s);
  }
};

function hungrySeven(arr) {
  joined = arr.join("");
  while (joined.match("789")) {
    joined = joined.replace(/789/g, "897");
  }
  return joined.split("").map(Number);
}