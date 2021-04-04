// Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).


function repeatString(string, number) {
    let result = '';
    for (let i = 0; i < number; i++) {
        result += string;
    }
    return result;
}


repeatString("abc", 3);