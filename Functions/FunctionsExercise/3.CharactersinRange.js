// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. 
// Keep in mind that the second character code might be before the first one inside the ASCII table.


function charactersInRange(beggining, end) {
    let charCodeBeggining = beggining.charCodeAt(0);
    let charCodeEnd = end.charCodeAt(0);
    let startCode = charCodeBeggining < charCodeEnd ? charCodeBeggining : charCodeEnd;
    let endCode = charCodeBeggining > charCodeEnd ? charCodeBeggining : charCodeEnd;
    let line = ""
    for (let i = startCode + 1; i < endCode; i++) {
        line += String.fromCharCode(i) + ' ';
    }
    return line;
}




console.log(charactersInRange('C',
    '#'

));