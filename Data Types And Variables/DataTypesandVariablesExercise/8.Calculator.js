// Write a function that receives 3 parameters: a number, an operator (string) and another number. 
// Print the result of the calculation on the console formatted to the second decimal point 


function solve(num1, operation, num2){
let sum = 0;
if(operation === "+"){
    sum = num1 + num2;
    console.log(sum.toFixed(2));
}else if(operation === "-"){
    sum = num1 - num2;
    console.log(sum.toFixed(2));
}else if(operation === "*"){
    sum = num1 * num2;
    console.log(sum.toFixed(2));
}else if(operation === "/"){
    sum = num1 / num2;
    console.log(sum.toFixed(2));
}

}

solve(25.5,
    '-',
    3
    );