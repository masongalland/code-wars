/* https://www.codewars.com/kata/frequency-analysis-with-buckets

Description:

Given an input array (arr) of positive integers, the objective is to return an output array where each index represents the amount of times an element appeared (frequency) in the input array.

More specifically, the element at each index of the output array will be an array (bucket) containing integers that appeared index-amount-of-times.

Otherwise, slot nulls (JavaScript, Java), nils (Ruby), or NULL's (C/C++) where appropriate. A valid array will always be provided.

If an array of [1,2,3,4,4,5,5,5] is passed in, the expected output should be: [null, [1,2,3], [4], [5], null, null, null, null, null].

Explanation:

// bucketize(arr) ======> outputArray
bucketize([1,2,3,4,4,5,5,5]) ======> [null, [1,2,3], [4], [5], null, null, null, null, null]
An element cannot appear 0 times, so a null is placed at outputArray[0]. The elements 1, 2, and 3 appear once. This is why they are located at outputArray[1]. Notice the elements are grouped together in an array and sorted in ascending order. The element 4 appears twice. This is why it is located at outputArray[2]. The element 5 appears three times. This is why it is located at outputArray[3].

Although an integer could have possibly appeared four, five, six, seven, or eight times, this is not the case for this particular example. This is the reason why the elements at outputArray[4], outputArray[5], outputArray[6], outputArray[7], and outputArray[8] are all null values.


*/

function bucketize(arr){
  let newArr = Array(arr.length + 1).fill(null)
  let sorted = arr.sort((a,b) => a - b)
  console.log(sorted)
  while(sorted.length){
    let num = sorted[0]
    let filtered = sorted.filter(e => e !== num)
    let count = sorted.length - filtered.length
    if(Array.isArray(newArr[count])){
      newArr[count].push(+num)
    }
    else {
      newArr[count] = [+num]
    }
    sorted = filtered
  }
  return newArr
}

console.log(bucketize([20, 40, 60, 80, 100, 20]))