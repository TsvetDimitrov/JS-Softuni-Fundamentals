// You will receive a single string. 
// This string is written in PascalCase format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.


function pascalCaseSplitter(string){
    let result = [];
    let upperIndex = 0;

    for(let i = 1; i < string.length; i++){

        if(string[i] === string[i].toUpperCase()){
            let word = string.substring(upperIndex, i);

            result.push(word);
            upperIndex = i;
        }
    }
    result.push(string.substring(upperIndex))
    console.log(result.join(", "));
}


pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');