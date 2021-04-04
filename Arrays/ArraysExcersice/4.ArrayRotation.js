// Write a function that receives an array and number of rotations you have to perform (first element goes at the end). 
// Output
// Print the resulting array elements separated my single space.


function arrayRotation(input, num){
    let currentElement = 0;
    for(let i = 0; i < num; i++){
        currentElement =input.shift(i);
        input.push(currentElement);
    }

    console.log(input.join(" "));
}


arrayRotation([51, 47, 32, 61, 21], 2);