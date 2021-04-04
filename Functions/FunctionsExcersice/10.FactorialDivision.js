// Write a function that receives two integer numbers. Calculate factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.


function factorialDevision(num1, num2){


    function factiorialNum(num){
        let result = 1;
        for(let i = num; i>=1; i--){
            result *= i;
        }
        return result;
    }
    let firstResult = factiorialNum(num1);
    // for(let i = num1; i>=1; i--){
    //     firstResult *=  i;
    // }
    
    let secondResult = factiorialNum(num2);
    // for(let i = num2; i >=1; i--){
    //     secondResult *= i;
    // }


    let finalResult = firstResult / secondResult;

    console.log(finalResult.toFixed(2));
}



factorialDevision(6, 2);