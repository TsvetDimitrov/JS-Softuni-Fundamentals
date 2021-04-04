// Write a function that sorts an array of numbers so that the first element is the biggest one, 
// the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. 
// Print the elements on one row, separated by single space.


function sorting(arr){
    let result = [];

    array = arr.sort((a,b) => a - b);

    while(array.length !== 0){
        result.push(array[array.length -1 ]) && array.pop();
        result.push(array[0]) && array.shift();
    }

    console.log(result.join(" "));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);