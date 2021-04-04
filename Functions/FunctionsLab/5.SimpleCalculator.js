// Write a function that receives three parameters and write an arrow function that calculate result depending of operator. 
// Operator can be 'multiply', 'divide', 'add', 'subtract'. 
// Input
// The input comes as parameters named numOne, numTwo, operator.


function simpleCalculator(numOne, numTwo, operator) {
    let add = (a, b) => a + b;
    let divide = (a, b) => a / b;
    let multiply = (a, b) => a * b;
    let subtract = (a, b) => a - b;



    switch (operator) {
        case `add`:
            return add(numOne, numTwo);
            break;
        case `divide`:
            return divide(numOne, numTwo);
            break;
        case `multiply`:
            return multiply(numOne, numTwo);
        case `subtract`:
            return subtract(numOne, numTwo);

        default:
            break;
    }
}


console.log(simpleCalculator(5, 5, 'multiply'));
