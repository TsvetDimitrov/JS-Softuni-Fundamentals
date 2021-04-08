// Write a function that receive a number and return if this number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
// That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).



function perfectNumber(number){
    let sum = 1;

    for(let i = 2; i <= number/2; i++){
        if(number % i == 0){
            sum += i;
        }
    }


    return sum === number ? `We have a perfect number!` : `It's not so perfect.`;
    
}



console.log(perfectNumber(1236498));
