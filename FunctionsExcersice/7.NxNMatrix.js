// Write a function that receives a single integer number n and prints nxn matrix with that number.



function matrix(number){
    let result = [];
    for(let i = 0; i < number; i++){
        result.push(number);
        for(let k = 0; k < number; k++){
            if(result.length % number === 0){
                console.log(result.join(" "));
                result = [];
            }
            result.push(number);
            
        }
    }

    
}   


matrix(7)