function SumOddNumbers(arr){
    let SumOddNumbers = 0;
    let SumEvenNumbers = 0;
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    for(let i = 0; i< arr.length; i++){
        if(arr[i] % 2 === 0){
            SumEvenNumbers+=arr[i];
        }else{
            SumOddNumbers +=arr[i];
        }
    }
    sum = SumEvenNumbers - SumOddNumbers;
    console.log(sum);
}

SumOddNumbers([1,2,3,4,5,6]);
SumOddNumbers([3,5,7,9]);
SumOddNumbers([2,4,6,8,10]);


