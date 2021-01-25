// Write a program which receives a number n and an array of elements. 
// Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.


function reversedArray(n, arr){
let newArr = [];


for(let i = 0; i < n; i++){
    newArr.push(arr[i]);
}
let result = '';
for(let i = newArr.length-1; i>=0; i--){
    result += newArr[i];
    result += ' ';

}
console.log(result);
}



reversedArray(3, [10, 20, 30, 40, 50])