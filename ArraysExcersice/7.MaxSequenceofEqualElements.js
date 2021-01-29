// Write a function that finds the longest sequence of equal elements in an array of numbers. 
// If several longest sequences exist, print the leftmost one.

function maxSequenceOfEqualElements(input){
    let result = [];
    for(let i = 0; i<input.length; i++){
        let currentSequence = [input[i]];
        for(let k = i+1; k<input.length; k++){
            if(input[i] === input[k]){
                currentSequence.push(input[k]);
            }else{
                break;
            }
        }
        if(result.length < currentSequence.length){
            result = currentSequence;
        }
    }
    console.log(result.join(" "));
}


maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
