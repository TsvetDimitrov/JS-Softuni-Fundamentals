// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves. 
// Print each half on a separate line.



function cutAndReverse(string){
    let firstHalf = string.substring(0, string.length/2);
    let secondHalf = string.substring(string.length/2);

   
    console.log(firstHalf.split("").reverse().join(""));
    console.log(secondHalf.split("").reverse().join(""));
}


cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');