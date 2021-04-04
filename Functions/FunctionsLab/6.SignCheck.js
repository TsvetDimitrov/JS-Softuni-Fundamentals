// You are given a function, that calculate the result of numOne * numTwo * numThree (the product) is negative or positive. 
// Try to do this WITHOUT multiplying the 3 numbers.
// The input comes as parameters named numOne, numTwo, numThree.

function signCheck(number1, number2, number3) {
    let negative = 0;
    let positive = 0;
    let haveZero = false;
    if (number1 < 0) {
        negative++;
    } else {
        positive++;
    }
    if (number2 < 0) {
        negative++;
    } else {
        positive++;
    }
    if (number3 < 0) {
        negative++;
    } else {
        positive++;
    }

    if (number1 == 0 || number2 == 0 || number3 == 0) {
        haveZero = true;
    }


    if (negative == 2 || negative == 0 || haveZero) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}


signCheck(-1,
    0,
    1
);