// Write a function that receives a text and a word to remove all occurrences of it inside the text.


function removeOccurences(word, text) {
    let old;

    while (old !== text) {
        old = text;
        text = text.replace(word, '');

    }


    console.log(text);
}


removeOccurences(`ice`,
    `kicegiciceeb`
);