/*

Code as fast as you can!

You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.


var myCounter = new Counter();

myCounter.increment();
myCounter.increment();
Test.assertEquals(myCounter.check(), 2)


*/

function Counter() {
  var counter = 0;
  this.check = () => counter;
  this.increment = () => counter++;
}
