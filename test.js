const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function checkWord(word) {
    let tempStr = '';
    
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letter == ' ') { continue; } 
        
        if (tempStr.indexOf(letter) == -1) {
            tempStr += letter;
        }
    }
    
    return tempStr.length == alphabet.length ?
        'includes every letter of alphabet' :
        'doesn\'t includes every letter of alphabet';
}

const word = 'The quick brown fox jumps over the lazy dog';

console.log(`word: ${word} ` + checkWord(word));