/*
In input string word(1 word):

replace the vowel with the nearest left consonant.
replace the consonant with the nearest rigth vowel.
P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

For example:

'codewars' => 'enedyzuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'
It is preloaded:
*/

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];

function replace(str) {
    return str.split('').map((e,i) => {
        var start = alphabet.indexOf(e)
        if(vowels.includes(e)){
            for(let i = start - 1; i !== start; i--){
                if(i === -1){
                    i = alphabet.length - 1
                }
                if(consonants.includes(alphabet[i])){
                    return alphabet[i]
                }
            }
        }else {
            for(let i = start + 1; i !== start; i++){
                if(i === alphabet.length){
                    i = 0
                }
                if(vowels.includes(alphabet[i])){
                    return alphabet[i]
                }
            }
        }
    }).join('')
}
