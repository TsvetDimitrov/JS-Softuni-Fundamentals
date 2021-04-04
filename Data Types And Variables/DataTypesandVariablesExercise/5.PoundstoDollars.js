// Write a function that converts British pounds to dollars formatted to 3th decimal point. 
// •	1 British Pound = 1.31 Dollars

function solve(pounds){
let dollars  = pounds * 1.31;

console.log(dollars.toFixed(3));
}

solve(39);