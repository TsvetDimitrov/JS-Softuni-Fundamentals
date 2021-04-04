// The input will be a single string.
// Find all special words starting with #. Word is invalid if it has anything other than letters. 
// Print the words you found without the tag each on a new line.


function modernTimesOfHashTag(string){

    let words = string.split(" ");

    for (const word of words) {
        if(word.startsWith(`#`) && isOnlyLetters(word.substring(1)) && word.substring(1) !== ""){
            console.log(word.substring(1));
        }
    }

    function isOnlyLetters(word){
        let isLetter = true;


        for (const char of word) {
            if(char.charCodeAt() <  65 || char.charCodeAt() > 90 && char.charCodeAt() < 97 || char.charCodeAt() > 122){
                isLetter = false;
                break;
            }
        }

        return isLetter;
    }

    

}



console.log(modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia'));