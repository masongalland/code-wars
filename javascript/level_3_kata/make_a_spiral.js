/*
1. make a two-dimensional array 

*/

var spiralize = function(size) {
    var arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Array(size).fill(0));
    }
  
  
    var benchmark = arr.length;
    var counter = 0;
  
    while (counter < arr.length) {
      for (var i = counter; i < benchmark; i++) {
        if (i === counter) {
          for (var l = counter ? counter -1 : counter; l < arr[i].length - counter; l++) {
            arr[i][l] = 1;
          }
        }
        if (i > counter) {
          arr[i][benchmark - 1] = 1;
        }
      }
      for (var j = benchmark - 1; j > counter + 1; j--) {
          if (j === benchmark - 1) {
              for (var k = arr[j].length - (2 + counter); k >= counter; k--) {
                  arr[j][k] = 1;
              }
          }
          if (j < benchmark - 1) {
              arr[j][counter] = 1;
          }
      }
      counter+=2;
      benchmark-=2;
    }
    
    return arr;
  };

var test = spiralize(10);
test
