// Write a function that rotates an array. The array should be rotated to the right side, 
// meaning that the last element should become the first, upon rotation. 
// The input comes as array of strings. The last element of the array is the amount of rotation you need to perform.
// The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.

function rotateArray(arr){
let rotations = Number(arr[arr.length-1]);
arr.pop();
for(let i = 0; i<rotations; i++){
let currentElement = arr.pop();
arr.unshift(currentElement);
}

console.log(arr.join(" "));
}


rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
