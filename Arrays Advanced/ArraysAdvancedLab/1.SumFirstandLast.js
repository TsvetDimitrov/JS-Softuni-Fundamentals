// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as array of string elements holding numbers.
// The output is the return value of your function.


function sumFirstAndLast(input){
    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());


    return firstNum + lastNum;
}


sumFirstAndLast(['20', '30', '40']);