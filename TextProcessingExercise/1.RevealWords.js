// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string which contains templates containing '*'.
// Find the word with the exact same length as the template and replace it.

function revealWords(words, string){
    words = words.split(", ");

    for (const word of words) {
        let starsTemp = '*'.repeat(word.length);
        string = string.replace(starsTemp, word);
    }


    console.log(string);


}


revealWords('great',
'softuni is ***** place for learning new programming languages'
);