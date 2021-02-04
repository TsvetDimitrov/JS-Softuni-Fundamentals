
// Write a function which receives three integer numbers to print the smallest. Use appropriate name for the function.



function smallestOfThree(num1, num2, num3) {
    let smallest = Number.MIN_SAFE_INTEGER;
    if (num1 <= num2 && num1 <= num3) {
        smallest = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        smallest = num2;
    } else if (num3 <= num1 && num3 <= num2) {
        smallest = num3;
    }
    console.log(smallest);
}


smallestOfThree(31,
    55,
    71
);