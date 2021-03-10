// Write a function that receives a text as a first parameter  and a single word as a second.
// Find all occurrences of that word in the text and replace them with the corresponding count of '*'.


function censoredWords(text, word) {
    while(text.includes(word)){
        text = text.replace(word, "*".repeat(word.length));
    }
    return text;
}


console.log(censoredWords("A small sentence with some words", "small"));