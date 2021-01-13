function areEqual(arr1, arr2){
let sum = 0;
let areEqual = true;


for(i=0;i<=arr1.length-1;i++){
    arr1[i]=Number(arr1[i]);
}

for(i=0;i<=arr2.length-1;i++){
    arr2[i]=Number(arr2[i]);
}

for(i=0;i<=arr1.length-1;i++){
    if(arr1[i] != arr2[i]){
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        areEqual =false;
        break;
    }else{
        sum+=arr1[i];
    }
}
if(areEqual == true){
    console.log(`Arrays are identical. Sum: ${sum}`);
}

}


areEqual(['10','20','30'], ['10','20','30']); //Arrays are identical. Sum: 60
areEqual(['1','2','3','4','5'], ['1','2','4','4','5']);//Arrays are not identical. Found difference at 2 index
areEqual(['1'], ['10']);//Arrays are not identical. Found difference at 0 index