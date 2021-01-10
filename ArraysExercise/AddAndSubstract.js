function addAndSubstract(arr){
let firstSum = 0;
let secondSum = 0;
  for(i = 0; i<arr.length; i++){
      firstSum += arr[i];
      let element = arr[i];
      if(element % 2 == 0){
          arr[i] += i;
      }else{
          arr[i] -= i;
      }
  }
  for(i = 0; i<arr.length; i++){
      secondSum+=arr[i];
  }
  console.log(arr);
  console.log(firstSum);
  console.log(secondSum);

}


addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);
