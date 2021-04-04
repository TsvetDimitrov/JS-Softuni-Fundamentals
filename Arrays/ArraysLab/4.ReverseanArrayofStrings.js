// Write a program which receives an array of strings (space separated values). 
// Your task is to reverse it and print its elements. Swap elements. 

function reversedArrayofStrings(elements){
let lastIndex = elements.length-1;

for(let i = 0; i<elements.length/2; i++){
    let currentIndex = elements[i];
    elements[i] = elements[lastIndex - i];
    elements[lastIndex - i] = currentIndex;
}
console.log(elements.join(" "));
}


reversedArrayofStrings(['a', 'b', 'c', 'd', 'e']);