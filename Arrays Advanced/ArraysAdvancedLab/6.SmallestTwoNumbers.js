// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as array of number elements.
// The output is printed on the console on a single line, separated by space.


function smallestTwoNumbers(input){

    input = input.sort((a, b) => a - b);

   return input.slice(0, 2).join(" ");
}




smallestTwoNumbers([30, 15, 50, 5]);
