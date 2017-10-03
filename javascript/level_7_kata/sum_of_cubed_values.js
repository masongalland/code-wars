/*

Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined if any of the values aren’t numbers.

https://www.codewars.com/kata/sum-of-odd-cubed-numbers

*/

//solution 1:

function cubeOdd(arr) {
  var cubed = arr.map(e => Math.pow(e, 3));
  var filtered = cubed.filter(e => e % 2 !== 0);

  if (arr.every(e => typeof e === "number")) {
    return filtered.reduce((a, b) => a + b, 0);
  }
  return undefined;
}

//solution 2:

function cubeOdd(arr) {
  let sum = 0;
  let cubed = arr.map(e => Math.pow(e, 3));
  for (let i = 0; i < cubed.length; i++) {
    if (isNaN(cubed[i])) {
      return undefined;
    }
    if (cubed[i] % 2 !== 0) {
      sum += cubed[i];
    }
  }
  return sum;
}
