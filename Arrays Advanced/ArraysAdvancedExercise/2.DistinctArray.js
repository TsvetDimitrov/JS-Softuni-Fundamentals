// You will be given an array of integer numbers on the first line of the input (space-separated). 
// Remove all repeating elements from the array. 
// Print the result elements separated by single space.



function distinctArray(arr) {


    for (let i = 0; i < arr.length; i++) {
        let index = arr.indexOf(arr[i], i + 1);


        while(index !== -1){
            arr.splice(index, 1);
            index = arr.indexOf(arr[i], i + 1);
        }
    }

    return arr.join(" ");
}


console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));
