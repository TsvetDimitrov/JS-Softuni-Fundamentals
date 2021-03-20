// Your task is to write program which extracts emojis from a text and find the threshold based on the input.
// You have to get your cool threshold. It is obtained by multiplying all the digits found in the input. 
//  The cool threshold could be a very big number, so be mindful.
// An emoji is valid when:
// •	Is surrounded by either :: or ** (exactly 2)
// •	Is at least 3 characters long (without the surrounding symbols)
// •	Starts with a capital letter
// •	Continues with lowercase letters only
// Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
// Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::
// You need to count all valid emojis in the text and calculate their coolness.
// The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji. 
// Examples: ::Joy:: - 306, **Banana** - 577, ::Wink:: - 409
// You need to print the result of cool threshold and after that to take all emojis out of the text, 
// count them and print the only the cool ones on the console. 
// Input
// •	On the single input you will receive a piece of string. 
// Output
// •	On the first line of the output print the obtained Cool threshold in format:
// •	Cool threshold: {coolThresholdSum}
// On the next line print the count of all emojis found in the text in format:
// •	{countOfAllEmojis} emojis found in the text. The cool ones are:
// •	{cool emoji 1}
// •	{cool emoji 2}
// •	{…}
// If there are no cool ones, just don't print anything in the end.
// Constraints
// There will always be at least one digit in the text!



function emojiDetector(input) {
    let text = input[0];
    let numbersPattern = /\d/g;

    let emojiPattern = /(\*\*|::)[A-Z][a-z]{2,}\1/g;

    let numbers = text.match(numbersPattern);
    numbers = numbers.map(Number);

    let coolThreshold = 1;
    numbers.forEach(x => coolThreshold *= x);

    console.log(`Cool threshold: ` + coolThreshold);

    let emojis = text.match(emojiPattern);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    for (const emoji of emojis) {
        let word = (emoji.slice(2, -2));
        let coolFactor = 0;

        for (let i = 0; i < word.length; i++) {
            coolFactor += word.charCodeAt(i);
        }

        if (coolFactor > coolThreshold) {
            console.log(emoji);
        }
    }
}



emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);




//Another Solution:


function emojiDetectorTest(input){
    let text = input.shift();

    let numbersPattern = /\d/g;
    let emojies = /(:{2}|\*{2})(?<values>[A-Z][a-z]{2,})(\1)/g;
    let allNumbers = text.matchAll(numbersPattern);
    let threshold = getThreshold(allNumbers);
    let currMatch = [];
    let coolEmojies = [];

    currMatch = emojies.exec(text);
    let counter = 0;
    while(currMatch){
        counter++;
        let curEmoji = currMatch.groups.values;
        let sumOfCharacters = sumAscii(curEmoji);

        if(sumOfCharacters > threshold){
            coolEmojies.push(currMatch[0]);
        }

        currMatch = emojies.exec(text);
    }

    console.log(`Cool threshold: ${threshold}`)
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    console.log(coolEmojies.join("\n"));

    function getThreshold(iterator){
        let numbers = [];
        let multiplayed = 0;
        for (let num of iterator) {
            numbers.push(num[0]);
        }

        multiplayed = numbers.reduce((acc, a)=> acc*a, 1);
        return multiplayed;

    }


    function sumAscii(text){
        text = text.split("");

        let sum = 0;

        for (char of text) {
            sum += char.charCodeAt(0);
        }


        return sum;
    }
}