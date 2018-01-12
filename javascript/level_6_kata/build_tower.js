/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
*/

function towerBuilder(nFloors) {
    const bottomFloor = 1 + (2 * nFloors - 1);
    var array = [];

    for(let i = 1; i <= bottomFloor; i += 2) {
        let floor = " ".repeat((bottomFloor / 2) - (i/2)) + "*".repeat(i);
        floor = floor.padEnd(bottomFloor - 1)
        array.push(floor)
    }
    return array;
}


//solution that codewars accepts:

function towerBuilder(nFloors) {
    const bottomFloor = 1 + (2 * nFloors - 1);
    var array = [];

    for(let i = 1; i <= bottomFloor; i += 2) {
        let floor = " ".repeat((bottomFloor / 2) - (i/2)) + "*".repeat(i);
        floor += " ".repeat((bottomFloor / 2) - (i/2))
        array.push(floor)
    }
    return array;
}