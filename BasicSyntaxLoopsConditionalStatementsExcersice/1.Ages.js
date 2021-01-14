// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder. The input comes as single number parameter. The bounders are:
// ·	0-2 – baby; 
// ·	3-13 – child; 
// ·	14-19 – teenager;
// ·	20-65 – adult;
// ·	>=66 – elder; 
// ·	In all other cases - out of bounds
// ·	All the values are inclusive.

function solve(age){

    if(age >= 0 && age <= 2){
        console.log("baby");
    }else if(age > 2 && age <= 13){
        console.log("child");
    }else if(age > 13 && age <= 19){
        console.log("teenager");
    }else if(age > 19 && age <= 65){
        console.log("adult");
    }else if (age > 65){
        console.log("elder");
    }else{
        console.log("out of bounds");
    }
}

solve(20);
solve(1);
solve(100);