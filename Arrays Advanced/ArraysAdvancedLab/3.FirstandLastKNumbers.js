// Write a function that prints the first k and the last k elements from an array of numbers.
// The input comes as array of number elements. The first element represents the number k, 
// all other elements are from the array that needs to be processed.
// The output is printed on the console on two lines. 
// On the first line print the first k elements, separated by space. 
// On the second line print the last k elements, separated by space.




function firstAndLastNumbers(input){
    let k = input.shift();
    let firstArr = input.slice(0, k);
    let secondArr = input.slice(-k);
    console.log(firstArr.join(" "));
    console.log(secondArr.join(" "));

}



firstAndLastNumbers([2, 7, 8, 9]);