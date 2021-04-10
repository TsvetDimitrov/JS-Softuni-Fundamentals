// Write a function that decrypts a message by a given key and gathers information about hidden treasure type and its coordinates. 
// On the first line you will receive a key (sequence of numbers). 
// On the next few lines until you receive "find" you will get lines of strings. 
// You have to loop through every string and decrease the ascii code of each character with a corresponding number of the key sequence. 
// The way you choose a key number from the sequence is just looping through it. 
// If the length of the key sequence is less than the string sequence, you start looping from the beginning of the key. 
// For more clarification see the example below. After decrypting the message you will get a type of treasure and its coordinates. 
// The type will be between the symbol '&' and the coordinates will be between the symbols '<' and '>'. 
// For each line print the type and the coordinates in format:
// "Found {type} at {coordinates}".



function treasureFinder(input) {
    let key = input.shift().split(" ").map(Number);
    let curPosition = 0;
    let line;
    let regex = /&(?<type>.+)&[^<]*<(?<coord>.+)>/g
    let modifiedLine;
    while ((line = input.shift()) !== "find") {
        let nums = line.split("");
        curPosition = 0;
        for (let i = 0; i < line.length; i++) {
            if (curPosition >= key.length) {
                curPosition = 0;
            }
            nums[i] = line.charCodeAt(i) - key[curPosition];
            curPosition++;
        }
        let result = "";
        for (let i = 0; i < nums.length; i++) {
            result += String.fromCharCode(nums[i]);
        }
        let test = result.match(regex);
        if (test) {
            let match = regex.exec(result);
            let type = match[1];
            let coord = match[2];

            console.log(`Found ${type} at ${coord}`);
        }
    }
}


treasureFinder([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'
]);