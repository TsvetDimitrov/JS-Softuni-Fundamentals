// Write a function that receives a single string and replaces 
// any sequence of the same letters with a single corresponding letter


function replaceRepeatingChars(string){

    let result = '';
    for (const char of string) {
        if(char !== result[result.length-1]){
            result += char;
        }
    }

    console.log(result);
}


replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');