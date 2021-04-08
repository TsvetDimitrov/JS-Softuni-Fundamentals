// Write a function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove". 
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// •	Upon receiving an "add" command you should add the current number to your array.
// •	 Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
// Input
// The input comes as array of strings. Each element holds a command.
// Output
// Print elements in a row, separated by single space. In case of an empty array, just print "Empty".


function addAndRemove(arr){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === "add"){
            newArr.push(i+1);
        }else if(arr[i] === "remove"){
            newArr.pop();
        }
    }
    
    if(newArr.length<= 0){
        console.log("Empty")
    }else{
        console.log(newArr.join(" "));
    }
    
}


addAndRemove(['remove', 'remove', 'remove']);
