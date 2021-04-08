// Write a function, which prints common elements in two string arrays. 
// Print all matches on separate lines. Compare the first array with the second array.

function commonElements(arr1, arr2){

        for(let i = 0; i<arr1.length; i++){
            for(let j = 0; j<arr2.length; j++){
                if(arr1[i] === arr2[j]){
                    console.log(arr1[i]);
                    break;
                }else{
                    continue;
                }
            }
        }
}


commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

)