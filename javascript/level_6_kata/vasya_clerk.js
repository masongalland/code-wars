/* https://www.codewars.com/kata/vasya-clerk/javascript

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

###Examples:

// === JavaScript ==

tickets([25, 25, 50]) // => YES
tickets([25, 100])
        // => NO. Vasya will not have enough money to give change to 100 dollars

*/

function tickets(arr){
  let cash = [];
  for(let i = 0; i < arr.length; i++){
    let payment = arr[i];
    if(payment < 100) {
      if(payment === 25) {
        cash.push(payment);
        continue;
      }
      else cash.unshift(payment)
    }
    let change = payment - 25;
    let index = cash.indexOf(change);
    if(index !== -1) {
      cash.splice(index, 1)
      continue;
    }
    else {
      for (let j = 0; j < cash.length; j++) {
        let bill = cash[j]
        if(bill <= change) {
          change -= bill;
          cash.splice(j, 1);
          j--
        }
        if(change === 0) break;
      }
      if(change > 0) return "NO"
    }
  }
  return "YES"
}

// better solutions:

function tickets(peopleInLine) {
  var bills = [0, 0, 0]
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[0]++
        break

      case 50:
        bills[0]--
        bills[1]++
        break

      case 100:
        bills[1] ? bills[1]-- : bills[0] -= 2
        bills[0]--
        break
    }

    if (bills[0] < 0) {
      return 'NO'
    }
  }

  return 'YES'
}

function tickets(peopleInLine){
  var [n25, n50, n100] = [0, 0, 0];
  for (var i = 0; i < peopleInLine.length; i++) {
    switch(peopleInLine[i]) {
      case 25: n25++; break;
      case 50: n50++; n25--; break;
      case 100: n100++; n25--;
        if (n50) n50--; else n25 -= 2; break;
    }
    if ([n25, n50, n100].some(v => v < 0)) return 'NO';
  }
  return 'YES';
}