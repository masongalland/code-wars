function snail(arr) {
  var benchmark = arr.length;
  var counter = 0;
  var newArr = [];

  while (counter < 2) {
    for (var i = counter; i < benchmark; i++) {
      if (i === counter) {
        for (var l = counter; l < arr[i].length - counter; l++) {
          newArr.push(arr[i][l]);
        }
      }
      if (i > counter) {
        newArr.push(arr[i][benchmark - 1]);
      }
    }
    for (var j = benchmark - 1; j > counter; j--) {
      if (j === benchmark - 1) {
        for (var k = arr[j].length - (2 + counter); k >= counter; k--) {
          newArr.push(arr[j][k]);
        }
      }
      if (j < benchmark - 1) {
        newArr.push(arr[j][counter]);
      }
    }
    counter++;
    benchmark--;
  }

  return newArr;
}
