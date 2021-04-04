// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.


function evenAndOddSubstraction(input){
    let sumOdd = 0;
    let sumEven = 0;
    let result = 0;
        for(let i = 0; i<input.length; i++){
            if(input[i] % 2 == 0){
                sumEven += Number(input[i]);
            }else {
                sumOdd += Number(input[i]);
            }
        }
        result = sumEven - sumOdd;
        console.log(result);

}



evenAndOddSubstraction([2,4,6,8,10]);