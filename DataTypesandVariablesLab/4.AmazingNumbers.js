function solve(number){
let splitted = String(number).split("");
console.log(splitted);
let sum = 0;
for(let i = 0; i <splitted.length; i++)
sum += i;
console.log(sum);
}


//solve(1233);
solve(999);
solve(583472);