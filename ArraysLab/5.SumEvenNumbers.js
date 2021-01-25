//Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.

function sumEvenNumbers(input){
    let sum = 0;
    for(let i = 0; i<input.length; i++){
        
        if(input[i] % 2 == 0){
            
            sum += Number(input[i]);
        }
    }
    console.log(sum);
}



sumEvenNumbers(['1','2','3','4','5','6']);