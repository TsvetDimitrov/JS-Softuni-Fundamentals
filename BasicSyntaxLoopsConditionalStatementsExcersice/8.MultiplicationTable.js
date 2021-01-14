// You will receive a number as an input from the console. Print the 10 times table for this number. 
// See the examples below for more information.
// Output
// Print every row of the table in the following format:
// {number} X {times} = {product}


function solve(number){
    let sum = 1;
for(let i = 1; i <= 10; i++){
    sum = number * i;
    console.log(`${number} X ${i} = ${sum}`);
    sum = 1;
}
}

solve(5);
solve(2);

