// Write a function that processes the elements in an array one by one and produces a new array.
// Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
// The input comes as array of number elements.
// The output is printed on the console, each element on a new line.


function negativeOrPositiveNumbers(input){
    let newArr = [];
    for (const iterator of input) {
        if(iterator < 0){
            newArr.unshift(iterator);
        }else{
            newArr.push(iterator);
        }
    }

    for (const iterator of newArr) {
        console.log(iterator);
    }
}


negativeOrPositiveNumbers([3, -2, 0, -1]);
