// Write a function that receives a text and a string that you need to search. 
// Print all the occurrences of that word in the string.


function countStringOccurences(){
    let splitted = text.split(" ");
    let counter = 0;

    for (let word of splitted) {
        if(word === string){
            counter++;
        }
    }

    console.log(counter);
}


countStringOccurences("This is a word and it also is a sentence",
"is"
);