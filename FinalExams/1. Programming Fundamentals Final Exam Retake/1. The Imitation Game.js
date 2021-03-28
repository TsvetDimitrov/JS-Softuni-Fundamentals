// You are a mathematician during world war 2, who has joined the cryptography team to decipher the enemy's enigma code. 
// Your job is to create a program to crack the codes. 
// On the first line of the input you will receive the encrypted message. After that, until the "Decode" command is given,
//  you will be receiving strings with instructions for different operations that need to be performed upon the concealed message 
//  to interpret it and reveal its true content. There are several types of instructions, split by '|'
// •	Move {number of letters}
// o	Moves the first n letters to the back of the string. 
// •	Insert {index} {value}
// o	Inserts the given value before the given index in the string.
// •	ChangeAll {substring} {replacement} 
// o	Changes all occurrences of the given substring with the replacement text.
// Input / Constraints
// •	On the first line, you will receive a string with message.
// •	On the next lines, you will be receiving commands, split by '|' .
// Output
// •	After the "Decode" command is received, print this message:
// "The decrypted message is: {message}"



function theImitationGame(input){
    let message = input.shift();

    let line;
    while((line = input.shift()) !== "Decode"){
        let [command, ...args] = line.split("|");
        if(command === "Move"){
            let numberOfLetters = Number(args);
            let firstPart = message.substring(0, numberOfLetters);
            let secondPart = message.substring(numberOfLetters);
            message = secondPart + firstPart;   
        }else if(command === "Insert"){
            let [index, value] = args;
            index = Number(index);
            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index);
            message = firstPart + value + secondPart;
        }else if(command === "ChangeAll"){
            let [substring, replacement] = args;
            while(message.includes(substring)){
                message = message.replace(substring, replacement);
            }
        }  
    }
    console.log(`The decrypted message is: ${message}`);
}




theImitationGame([ 'zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode' ]);
