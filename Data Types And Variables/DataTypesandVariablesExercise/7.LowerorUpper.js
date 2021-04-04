// Write a function that prints whether a given character is upper-case or lower-case.

function solve(char){

let charCode = char.charCodeAt(0);
if(charCode >= 65 && charCode <= 90 ){
    console.log("upper-case");
}else{
    console.log("lower-case");
}

}


solve('L');