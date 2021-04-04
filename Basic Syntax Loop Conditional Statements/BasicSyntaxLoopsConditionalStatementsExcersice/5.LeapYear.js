// Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. 
//Return the result like examples below:
// Examples:
// Input	Output
// 1984	    yes
// 2003	    no
// 4	    yes

function solve(year){
if(year % 4 == 0 && year % 100 != 0 ){
    
    console.log("yes");
}else if(year % 400 == 0){
    console.log("yes");
}else{
    console.log("no");
}

}

solve(1984);
solve(2003);
solve(4);
solve(400);