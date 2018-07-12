function findUnique(arr){
  var hash = {};
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    if (hash[val]) hash[val]++;
    else hash[val] = 1;
  }
  for(let key in hash){
    if(hash[key] === 1) return +key
  }
}

// lodash one liner

const findUnique = arr => +_.findKey(_.countBy(arr), e => e === 1)

// solution that uses the Bitwise XOR operator (I do not understand how this works)
// 10 times faster than the solution above

function findUnique3(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}