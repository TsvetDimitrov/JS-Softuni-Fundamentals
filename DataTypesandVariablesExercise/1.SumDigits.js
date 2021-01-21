//Write a function which will be given a single number. Your task is to find the sum of its digits.
function solve(num){
    
    let numbers = num.toString().split("");
    
    let sum = 0
    for(let i = 0; i<numbers.length; i++){
        sum += Number(numbers[i]);
    }
    console.log(sum);
}

solve(543);