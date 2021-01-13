function reverseArray(num, inputArray){
    let arr = [];
    
    for(let i = 0; i<num; i++){
        arr.push(inputArray[i]);
    }


    let result = '';
    for(let i = arr.length-1; i>=0; i--){
    result +=arr[i];
    result += " ";
    }
    console.log(result);
}

reverseArray(3, [10, 20, 30, 40, 50]);