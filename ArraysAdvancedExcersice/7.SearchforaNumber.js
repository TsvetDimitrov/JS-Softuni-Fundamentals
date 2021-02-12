// You will receive two arrays of integers. The second array is contains exactly three numbers. 
// First number represents the number of elements you have to take from the first array (starting from the first one).
// Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
// Third number is the number we search in our collection after the manipulations. 
// As output print how many times that number occurs in our array in the following format: 
// "Number {number} occurs {count} times."





function searchForANumber(arr, secondArr){
    let [howManyToGet, whatToCut, howManyTimesNumber] = secondArr;
    
    arr = arr.slice(0, howManyToGet);
    let deleted = arr.splice(0, whatToCut);
    let num = arr.filter(item => item == howManyTimesNumber).length;

    console.log(`Number ${howManyTimesNumber} occurs ${num} times.`);
}


searchForANumber([5, 2, 3, 3, 4, 1, 6],
    [5, 2, 3]
    );