/*
We are tracking down our rogue agent Matthew Knight A.K.A. Roy Miller and he travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey. You are given an array of routes of his itineraries. List down only the places where he will go.

Example:

routes = [[USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN]]

result: "USA, BRA, UAE, JPN, PHL"

note: It is safe to assume that there will be no repeating place with different route and there are no empty routes and could have at least one (1) route (from one waypoint to another).
*/

function findRoutes(routes) {
  var arr = [];
  var answer = [];
  var start
  for(var i = 0; i < routes.length; i++){
    arr.push(...routes[i])
  }
  
  var arrToString = arr.join(" ");
  
  for (var k = 0; k < routes.length; k++){
    var find = routes[k][0];
    var regex = new RegExp(find, "g")
    if(arrToString.match(regex).length === 1){
      start = routes[k];
    }
  }
  answer = [start]
  for(var j = 0; j < routes.length; j++){
    if(routes[j] !== start){
      if(routes[j][0] === answer[answer.length - 1][1]){
        answer.push(routes[j])
      }else{
        routes.push(routes[j])
      }
    }
  }

  var lastArr = []
  var lastAnswer = []
  
  for(var l = 0; l < answer.length; l++){
    lastArr.push(...answer[l]);
  }
  
  for(var m = 0; m < lastArr.length; m++){
    if(lastAnswer.indexOf(lastArr[m]) === -1){
      lastAnswer.push(lastArr[m])
    }
  }
  return lastAnswer.join(', ')
}
