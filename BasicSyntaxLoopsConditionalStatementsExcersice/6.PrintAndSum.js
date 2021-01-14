// Write a function to display numbers from given start to given end and their sum. The input comes as two number parameters.
// Examples
// Input	Output
// 5, 10	5 6 7 8 9 10
// Sum: 45
// 0, 26	0 1 2 … 26
// Sum: 351
// 50, 60	50 51 52 53 54 55 56 57 58 59 60
// Sum: 605
function solve(firstIndex, lastIndex){
    let sum = 0;
    let arr = [];

    for(let i = firstIndex; i<=lastIndex; i++){
        sum = sum + i
        arr.push(i);
        

    }
    console.log((arr).join(" "));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);
