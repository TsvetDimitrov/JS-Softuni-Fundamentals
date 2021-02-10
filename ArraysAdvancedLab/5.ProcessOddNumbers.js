// You are given an array of numbers. Write a function that prints the elements at odd positions from the array, 
// doubled and in reverse order.
// The input comes as array of number elements.
// The output is printed on the console on a single line, separated by space.

function processOddNumbers(input){
    let newArr = [];
    for (let i = 0; i<input.length; i++) {
        if(i % 2 === 1){
            newArr.push(input[i]);
        }
    }
    newArr = newArr.map(x => x*2);
    newArr = newArr.reverse();
    console.log(newArr.join(" "));
}



processOddNumbers([3, 0, 10, 4, 7, 3]);