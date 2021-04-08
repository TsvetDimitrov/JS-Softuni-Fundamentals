// You will receive three integer numbers. 
// Write a function sum() to get the sum of the first two integers and subtract() function that subtracts the third integer from the result.



function addAndSubstract(num1, num2, num3) {
    function sum(number1, number2) {
        return number1 + number2;
    }

    let result = sum(num1, num2);
    return result - num3;


}


console.log(addAndSubstract(42,
    58,
    100
));