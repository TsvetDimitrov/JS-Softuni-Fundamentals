// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, 
// on the third line print the sum of numbers from the modified array.

function addAndSubstract(input){
    let sum = 0;
    let secondSum = 0;
   
    for(let i=0; i<input.length; i++){
        sum += input[i];
        if(input[i] % 2 == 0){
            input[i] += i;
        }else{
            input[i] -= i;
        }
    }

    for(let i = 0; i<input.length; i++){
        secondSum +=input[i];
    }

   


    console.log(input);
    console.log(sum);
    console.log(secondSum);

}



addAndSubstract([5, 15, 23, 56, 35]);