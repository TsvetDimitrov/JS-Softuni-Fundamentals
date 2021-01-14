//Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

function solve(number){

    for(let i = 1; i <= number; i++){
        
        for(let y =1; y <= i; y++){
           
            process.stdout.write(`${i} `);
        }
        console.log();
    }
}

solve(3);
solve(5);
solve(6);