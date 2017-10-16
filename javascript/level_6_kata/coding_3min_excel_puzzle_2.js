/*
You are given two arguments: excel(number array), like this:[1 ,2 ,3 ,4 ,5 ,6], and n(an index of target number)

Return the rank of excel[n].

The rank means, when excel in ascending order, what is its position.

In this simple version, excel length range: 5...99, elements of excel value range: 0...99

Some example to help you understand the rules:


    solveIt([1,2,3,4,5],0)=1
    rank:    1 2 3 4 5
    excel[0]=1, rank of number 1 is 1

    solveIt([1,2,3,4,5],1)=2
    rank:    1 2 3 4 5
    excel[1]=2, rank of number 2 is 2

    solveIt([5,4,3,2,1],0)=5
    rank:    5 4 3 2 1
    excel[0]=5, rank of number 5 is 5

    solveIt([5,4,3,2,1],1)=4
    rank:    5 4 3 2 1
    excel[1]=4, rank of number 4 is 4

    so easy? see other examples:

    solveIt([1,2,2,2,3],1)=2
    rank:    1 2 3 4 5
    the same number have diffrent ranks,
    the number of smaller indexes is in front of others.
    excel[1]=2, rank of first number 2 is 2

    solveIt([1,2,2,2,3],2)=3
    rank:    1 2 3 4 5
    excel[2]=2, rank of second number 2 is 3

    solveIt([2,2,2,2,2],2)=3
    rank:    1 2 3 4 5
    excel[2]=2, rank of 3rd number 2 is 3
*/


function solveIt(excel, n) {
  var value = excel[n];
  var sorted = [...excel].sort((a, b) => a - b);
  var count = 0;
  var testCount = 0;
  for (var i = 0; i < excel.length; i++) {
    if (excel[i] === value && i <= n) {
      count++;
    }
  }
  for (var j = 0; j < sorted.length; j++) {
    if (sorted[j] === value) {
      testCount++;
      if (testCount === count) {
        return j + 1;
      }
    }
  }
}
