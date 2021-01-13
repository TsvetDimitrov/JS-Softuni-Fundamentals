// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
// The number will be in the interval between 1 and 100.
function solve(number){
    let sum = 0; 
    let counter = 0;
    for(let i = 1; i <= 100; i+=2){
        
        sum += i;
        console.log(i);
        counter++;
        if(counter == number){
            break;
        }
        
    }
    console.log(`Sum: ${sum}`);
}

solve(5);