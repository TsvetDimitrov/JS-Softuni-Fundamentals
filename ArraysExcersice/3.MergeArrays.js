// Write a function which receives two string arrays and merges them into a third array.  
// •	If the index of the element is even, add into the third array the sum of both elements at that index
// •	If the index of the element is odd, add the concatenation of both elements at that index
// Input
// As input you will receive two string arrays.
// Output
// As output you should print the resulting third array, each element separated by " - ".

function mergeArrays(arr1, arr2){
    let newArr = [];
    let sum = 0;
    for(let i = 0; i<arr1.length; i++){
       if(i % 2 == 0){
        sum = Number(arr1[i]) + Number(arr2[i]);
        newArr.push(sum);
       }else{
           newArr.push(arr1[i] + arr2[i]);
       }
    }
    console.log(newArr.join(" - "));



}


mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);