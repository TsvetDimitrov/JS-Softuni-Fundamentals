// Write a program to receive a number n and for all numbers in the range 1…n print the number and if it is special or not (True / False).
// A number is special when its sum of digits is 5, 7 or 11.
function solve(num){
let sum = 0;
let result = ' ';

for(let i = 1; i <= num; i++){
    i = i.toString();
    for(let j = 0; j < i.length; j++){
        sum += Number(i[j]);   
    }
    result = sum === 5 || sum === 7 || sum === 11;
    console.log(result ? `${i} -> True` : `${i} -> False`);
    sum = 0;
}

}

solve(15);