// Write a program which receives two string arrays and print on the console whether they are identical or NOT. 
// Arrays are identical if their elements are equal. 
// If the arrays are identical find the sum of the first one and print on the console following message: 
// 'Arrays are identical. Sum: {sum}'
//  If the arrays are NOT identical find the first index where the arrays differ and print on the console following message:
//  'Arrays are not identical. Found difference at {index} index'.



function equalArrays(arr1, arr2){
    let sum = 0;
    let notIdentical = false;
    

    for(let i = 0; i<arr1.length; i++){
        arr1[i] = Number(arr1[i]);
    }

    for(let j = 0; j<arr2.length; j++){
        arr2[j] = Number(arr2[j]);
    }


    for(let i = 0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            notIdentical = true;
            break;
        }else{
            sum +=arr1[i];
        }
    }

    if(!notIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}



equalArrays(['10','20','30'], ['10','20','30']);