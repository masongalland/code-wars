/*
Write a function

tripledouble(num1,num2)
which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
For example:
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
If this isn't the case, return 0
*/


function tripledouble(num1, num2){
  var arr1 = String(num1).split('');
  var arr2 = String(num2).split('');
  var double = false;
  var trippleVal=[];
  var tripple = false;
  
  for(var i=0; i<arr1.length; i++){
    if((arr1[i] == arr1[i + 1]) && (arr1[i] == arr1[i + 2])){
      tripple = true;
      trippleVal.push(arr1[i]);
    }
  }
  
  for(var j=0; j<arr2.length; j++){
    if(trippleVal.indexOf(arr2[j]) !== -1){
      if(arr2[j] == arr2[j + 1]){
        double = true;
      }
    }
  }
  
  if(tripple === true && double === true){
    return 1;
  }else {
    return 0;
  }
    
}



/////////////////////////

function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}