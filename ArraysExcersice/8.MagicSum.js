// Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 

function magicSum(input, sum){
for(let i = 0; i<input.length; i++){
    for(let j = i+1; j<input.length; j++){
        if(input[i] + input[j] === sum){
            console.log(`${input[i]} ${input[j]}`);
        }
    }
}
}

magicSum([1, 7, 6, 2, 19, 23],
    8
    );