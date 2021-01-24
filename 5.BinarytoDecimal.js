// Write a function that reads an 8-bit binary number and converts it to a decimal.
// The input comes as one string element, representing a binary number.
// The output should be printed to the console.

function binaryToDecimal(number){
    
let toDecimal = 0;
let sum = 0;
let degree = (number.length) - 1;
    for(let i = 0; i <number.length; i++){
        let digit = Number(number[i]);
        sum += digit * 2 **degree;
        degree--;
    }
    console.log(sum);
}

binaryToDecimal("00001001");
