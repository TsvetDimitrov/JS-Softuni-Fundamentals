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