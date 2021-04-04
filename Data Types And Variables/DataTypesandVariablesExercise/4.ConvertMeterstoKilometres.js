// You will be given a number that will be distance in meters. 
// Write a program that converts meters to kilometers formatted to the second decimal point.
function solve(meters){
let kilometers = meters / 1000;
console.log(kilometers.toFixed(2));
}

solve(798);