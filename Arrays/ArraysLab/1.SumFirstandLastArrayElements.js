// Write a function that receives an array of strings and prints the sum of first and last element in that array.


function sumFirstAndLastElement(arr){
    let firstElement = arr[0];
    let lastElement = arr[arr.length-1];
let sum = firstElement + lastElement;
console.log(sum);

}


sumFirstAndLastElement([20, 30, 40]);