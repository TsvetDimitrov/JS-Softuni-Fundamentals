// You will be given a number and you have to return whether that number is divisible by the following numbers: 2, 3, 6, 7, and 10. 
// You should always take the bigger division. 
// If the number is divisible by both 2 and 3 it is also divisible by 6 and you should print only the division by 6. 
// If a number is divisible by 2 it is sometimes also divisible by 10 and you should print the division by 10. 
// If the number is not divisible by any of the given numbers print "Not divisible". 
// Otherwise print "The number is divisible by {number}".

function solve(number){
let byTen = false;
let bySeven = false;
let bySix = false;
let byThree = false;
let byTwo = false;
if(number % 10 == 0 && number % 2 == 0){
    byTen = true;
}else if(number % 7 == 0){
    bySeven = true;
}else if(number % 2 == 0 && number % 3 == 0 && number % 6 == 0){
    bySix = true;
}else if(number % 2 == 0 && number % 3 == 0){
    byThree = true;
}else if(number % 3 ==0){
    byThree = true;
}else if(number % 2 == 0){
    byTwo = true;
}else{
    console.log("Not divisible");
}

if(byTen){
    console.log("The number is divisible by 10");
}else if(bySeven){
    console.log("The number is divisible by 7");
}else if(bySix){
    console.log("The number is divisible by 6");
}else if(byThree){
    console.log("The number is divisible by 3");
}else if(byTwo){
    console.log("The number is divisible by 2");
}
}

solve(30);
solve(15);
solve(12);
solve(1643);

