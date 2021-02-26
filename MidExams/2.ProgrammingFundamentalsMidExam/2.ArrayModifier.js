// You are given an array with integers. Write a program to modify the elements after receive the commands “swap”, 
// “multiply” or “decrease”.
// •	“swap {index1} {index2}” take two elements and swap their places.
// •	“multiply {index1} {index2}” take element at the 1st index and multiply it with element at 2nd index. 
// Save the product at the 1st index.
// •	“decrease” decreases all elements in the array with 1.
// Input
// On the first input line you will be given the initial array values separated by a single space.
// On the next lines you will receive commands until you receive the command “end”. The commands are as follow: 
// •	“swap {index1} {index2}”
// •	“multiply {index1} {index2}”
// •	“decrease”
// Output
// The output should be printed on the console and consist element of the modified array – separated by “, “(comma and single space).
// Constraints
// •	Commands will be: “swap”, “multiply”, “decrease” and “end”
// •	Elements of the array will be integer numbers in the range [-231...231]
// •	Count of the array elements will be in the range [2...100]
// •	Indexes will be always in the range of the array




function arrayModifier(arr){
    let numbers = arr.shift().split(" ").map(Number);
    let commands = arr.shift().split(" ");


    while(commands != "end"){
        let command = commands[0];
        let index1 = commands[1];
        let index2 = commands[2];


        if(command === "swap"){
            let temp = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = temp;
        }else if(command === "multiply"){
            numbers[index1] = numbers[index1] * numbers[index2];
        }else if(command === "decrease"){
            numbers = numbers.map(x => x-1);
        }
        commands = arr.shift().split(" ");
    }
    console.log(numbers.join(", "));

}


arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  
  );