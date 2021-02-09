// Write a JS program that modifies a number until the average value of all its digits is higher than 5. 
// To modify the number, your program should append a 9 to the end of the number, 
// when the average value of all its digits is higher than 5 the program should stop appending. 
// If the number’s average value of all its digits is already higher than 5, no appending should be done.
// The input is a single number.
// The output should consist of a single number - the final modified number which has an average value of all its digits higher than 5. 
// The output should be printed on the console.
// Constraints
// •	The input number will consist of no more than 6 digits.
// •	The input will be a valid number (there will be no leading zeroes).


function numberModification(number){
    let numberAsString = String(number).split("");
    let averageSum = 0;
    let sum = 0;

    while(averageSum < 5){
        
    for(let i = 0; i<numberAsString.length; i++){
        sum += Number(numberAsString[i]);
    }
    averageSum = sum / numberAsString.length;
    if(averageSum < 5){
        numberAsString.push("9");
        sum = 0;
    }
}
console.log(numberAsString.join(""));




}



numberModification(5835);