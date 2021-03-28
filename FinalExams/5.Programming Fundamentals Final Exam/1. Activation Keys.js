// You are about to make some good money, but first you need to think of a way to 
// verify who paid for your product and who didn`t. You have decided to let people use the software 
// for a free trial period and then require an activation key in order to continue to use the product. 
// The last step before you could cash out is to design a program that creates unique activation keys for each user. 
// So, waste no more time and start typing!

// The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
// After that, until the "Generate" command is given, you will be receiving strings with instructions for different 
// operations that need to be performed upon the raw activation key.
// There are several types of instructions, split by ">>>":
// •	Contains>>>{substring} – checks if the raw activation key contains the given substring.
// o	If it does prints: "{raw activation key} contains {substring}".
// o	If not, prints: "Substring not found!"
// •	Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}
// o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case. 
// o	All given indexes will be valid.
// o	Prints the activation key.
// •	Slice>>>{startIndex}>>>{endIndex}
// o	Deletes the characters between the start and end indices (end index is exclusive).
// o	Both indices will be valid.
// o	Prints the activation key.
// Input
// •	The first line of the input will be string and it will consist of letters and numbers only. 
// •	After the first line, until the "Generate" command is given, you will be receiving strings.
// Output
// •	After the "Generate" command is received, print:
// o	"Your activation key is: {activation key}"

function activationKeys(input){
    let rawKey = input.shift();

    let line;
    while((line = input.shift()) !== "Generate"){
        let [command, ...args] = line.split(">>>");

        if(command === "Contains"){
            let substring = args;
            if(rawKey.includes(substring)){
                console.log(`${rawKey} contains ${substring}`);
            }else{
                console.log("Substring not found!");
            }
        }else if(command === "Flip"){
            let [mode, startIndex, endIndex] = args;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if(mode === "Upper"){
                let firstPart = rawKey.substring(0, startIndex);
                let secondPart = rawKey.substring(startIndex, endIndex);
                let thirdPart = rawKey.substring(endIndex);


                rawKey = firstPart + secondPart.toUpperCase() + thirdPart;
            }else{
                let firstPart = rawKey.substring(0, startIndex);
                let secondPart = rawKey.substring(startIndex, endIndex);
                let thirdPart = rawKey.substring(endIndex);

                rawKey = firstPart + secondPart.toLowerCase() + thirdPart;
            }
            
            console.log(rawKey);
        }else if(command === "Slice"){
            let [startIndex, endIndex] = args;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);

            let firstPart = rawKey.substring(0, startIndex);
            let secondPart = rawKey.substring(startIndex, endIndex);
            let thirdPart = rawKey.substring(endIndex);

            rawKey = firstPart + thirdPart;
            console.log(rawKey);
        }
    }
    console.log(`Your activation key is: ${rawKey}`);
}




activationKeys([
  '134softsf5ftuni2020rockz42',
  'Slice>>>3>>>7',
  'Contains>>>-rock',
  'Contains>>>-uni-',
  'Contains>>>-rocks',
  'Flip>>>Upper>>>2>>>8',
  'Flip>>>Lower>>>5>>>11',
  'Generate'
])


//One more way to solve.


function activationKeysTEST(input) {
    let actions = {
        Contains(key, string) {
            if (key.includes(string)) {
                console.log(`${key} contains ${string}`);
            } else {
                console.log(`Substring not found!`);
            }
            return key;
        },

        Flip(key, mode, startIndex, endIndex) {
            [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];
            let firstPart = key.substring(0, startIndex);
            let secondPart = key.substring(startIndex, endIndex);
            let thirdPart = key.substring(endIndex);
            if (mode === "Lower") {

                secondPart = secondPart.toLocaleLowerCase();
            } else {
                secondPart = secondPart.toLocaleUpperCase();
            }
            let result = firstPart + secondPart + thirdPart;

            console.log(result);
            return result;
        },

        Slice(key, startIndex, endIndex) {
            [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];
            let firstPart = key.substring(0, startIndex);
            let secondPart = key.substring(startIndex, endIndex);
            let thirdPart = key.substring(endIndex);

            let result = firstPart + thirdPart;

            console.log(result);
            return result;
        }
    }
    let key = input.shift();
    let line;
    while ((line = input.shift()) !== "Generate") {
        let [actionName, ...args] = line.split(">>>");
        key = actions[actionName](key, ...args);
    }
    console.log(`Your activation key is: ` + key);
}