/*
Background
    There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

    Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

    In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
    return a string where:
    1) the first and last characters remain in original place for each word
    2) characters between the first and last characters must be sorted alphabetically
    3) punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions
    1) words are seperated by single spaces
    2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
    3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca
    4) for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
    5) ignore capitalisation
*/

// split string at spaces
// loop over array--for each word,
// note index of any punctuation and remove it,
// slice out the middle, sort it,
// splice it back in,
// add back punctuation,.

function scrambledWords(str) {
    const arr = str.split(" ");
    const answer = str.map((e,i,a) => {
        let copy = e,
            myRegex = /[-',.]/g,
            result,
            punctuation = [];

        while(result = myRegex.exec(copy)) {
            punctuation.push(result)
        }


    })
}

String.prototype.splice = function(start, delCount, newSubStr) {
    return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};


function scrambledWords(str) {
    const arr = str.split(" ");
    const answer = arr.map((e,i,a) => {
        if(e.length === 1) return e;
        let myRegex = /[-',.]/g,
            result,
            punctuation = [],
            filtered = e.replace(myRegex, ""),
            middle = filtered.slice(1, filtered.length - 1).split('').sort().join(''),
            copy = filtered[0] + middle + filtered[filtered.length - 1];

        while(result = myRegex.exec(e)) {
            punctuation.push(result)
        }

        if(punctuation.length > 0){
            for(let i = 0; i < punctuation.length; i++){
                copy = copy.splice(punctuation[i].index, 0, punctuation[i][0])
            }
        }

        return copy;
    })
    return answer.join(' ');
}