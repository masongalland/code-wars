/*
I'm sure, you know Google's "Did you mean ...?", when you entered a search term and mistyped a word. In this kata we want to implement something similar.

You'll get an entered term (lowercase string) and an array of known words (also lowercase strings). Your task is to find out, which word from the dictionary is most similar to the entered one. The similarity is described by the minimum number of letters you have to add, remove or replace in order to get from the entered word to one of the dictionary. The lower the number of required changes, the higher the similarity between each two words.

Same words are obviously the most similar ones. A word that needs one letter to be changed is more similar to another word that needs 2 (or more) letters to be changed. E.g. the mistyped term berr is more similar to beer (1 letter to be replaced) than to barrel (3 letters to be changed in total).

Extend the dictionary in a way, that it is able to return you the most similar word from the list of known words.

Code Examples:

fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
fruits.findMostSimilar('strawbery'); // must return "strawberry"
fruits.findMostSimilar('berry'); // must return "cherry"

things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
things.findMostSimilar('coddwars'); // must return "codewars"

languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
languages.findMostSimilar('heaven'); // must return "java"
languages.findMostSimilar('javascript'); // must return "javascript" (same words are obviously the most similar ones)
*/

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
  if (this.words.indexOf(term) !== -1) return term;
  var possibilities = [];
  for (var i = 0; i < term.length; i++) {
    for (var j = term.length; j > i; j--) {
      possibilities.push(term.slice(i, j));
    }
  }
  var matches = this.words.map((e, i) => {
    var count = 0;
    possibilities.forEach((ele, ind) => {
      var check = new RegExp(ele, "g");
      var matchLength = e.match(check) !== null ? e.match(check)[0].length : 0;

      if (matchLength > count) {
        count = matchLength;
      }
    });
    return e.length - count;
  });
  return this.words[matches.indexOf(Math.min(...matches))];
};

///////
//make matches an array of match arrays for each item in this.words
//do the forLoop that adds items to finalMatches for each array in the matches array
//join results insite above-mentioned loop.
//check length of each item compared to the length of the parameter

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  if (this.words.indexOf(term) !== -1) return term;
  var possibilities = [];
  for (var i = 0; i < term.length; i++) {
    for (var j = term.length; j > i; j--) {
      possibilities.push(term.slice(i, j));
    }
  }
  var matches = [];
  this.words.forEach((e, i) => {
    var subMatches = []
    possibilities.forEach((ele, ind) => {
      var check = new RegExp(ele, "g");
      if (e.match(check)) {
        subMatches.push(e.match(check)[0]);
      }
    });
    matches.push(subMatches)
  });
  var nextStart = 0;
  
  
  var answerMatches = []
  
  matches.forEach((e,i)=> {
    var finalMatches = [e[0]];
    for (var k = 0; k < finalMatches.length; k++) {
      for (var l = nextStart; l < e.length; l++) {
        if (!finalMatches[k].includes(e[l])) {
          finalMatches.push(e[l]);
          nextStart = l;
          break;
        }
      }
    }
    answerMatches.push(finalMatches.join(""))
  })
  console.log(answerMatches)
  var answerLengths = answerMatches.map((e,i)=>{
    if(term.length < this.words[i].length){
      return this.words[i].length - e.length
    }
    else{
      return term.length - e.length
    }
    
  })
  console.log(answerLengths);
  return this.words[answerLengths.indexOf(Math.min(...answerLengths))];
};