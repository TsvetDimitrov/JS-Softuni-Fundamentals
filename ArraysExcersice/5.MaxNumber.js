// Write a function to find all the top integers in an array. A top integer is an integer which is bigger than all the elements to its right. 
// Output:
// Print all top integers on the console, separated by single space.

function maxNumber(input){
    let newArr = [];
  for(let i = 0; i<input.length; i++){
      let isBigger = true;
      for(let j = i+1; j<input.length; j++){
          if(input[i] <= input[j]){
              isBigger = false;
              break;
          }
      }
      if(isBigger){
        newArr.push(input[i]);
      }
  }
  console.log(newArr.join(" "));
}



maxNumber([1, 4, 3, 2]);
