// Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right. 
// If there are NO elements to the left/right, their sum is 0. 
// Print the index that satisfies the required condition or "no" if there is no such index.

function equalSums(input){

    let isIndex = false
    for(let i = 0; i<input.length; i++){
        let rightSum = 0;
        let leftSum = 0;  
        if(i!= 0){
            for(let j = 0; j<i; j++){
                leftSum += input[j];
            }
        }  
        if(i != input.length-1){
            for(let k = i+1; k<input.length; k++){
                rightSum += input[k];
            }
        }
        if(rightSum == leftSum){
            console.log(i);
            isIndex = true;
        }
    }
    if(!isIndex){
        console.log("no");
    }

    
}



equalSums([1]);