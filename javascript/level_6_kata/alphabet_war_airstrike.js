/*
Introduction

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spreaded everywhere on the battlefield.

Task

Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. Return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
The other letters don't have power and are only victims.
The * bombs kills the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

Example

alphabetWar("s*zz");           //=> Right side wins!
alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWar("zzzz*s*");       //=> Right side wins!
alphabetWar("www*www****z");  //=> Left side wins!
*/

function alphabetWar(str){
    var left = ["s", "b", "p", "w"];
    var right = ["z", "d", "q", "m"];
    var leftPoints = 0;
    var rightPoints = 0;
    var filtered = str.split("").filter((e,i,a) => a[i - 1] !== "*" && a[i + 1] !== "*" && e !== "*")
    for(var i = 0; i < filtered.length; i++){
      var addLeft = left.indexOf(filtered[i]) + 1;
      var addRight = right.indexOf(filtered[i]) + 1;
      leftPoints += addLeft;
      rightPoints += addRight;
    }
    return leftPoints > rightPoints ? "Left side wins!" : rightPoints > leftPoints ? "Right side wins!" : "Let's fight again!"
  }