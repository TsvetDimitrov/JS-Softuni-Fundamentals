// Write a function that receives an array of integers and array of string commands and executes them over the array. 
// The commands are as follows:
// •	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// •	contains <element> – prints the index of the first occurrence of the specified element 
// (if exists) in the array or -1 if the element is not found.
// •	remove <index> – removes the element at the specified index.
// •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// •	print – stop receiving more commands and print the last state of the array.

function arrayManipulator(array = [], commands = []) {
    let result = array.slice(0);
    let output = [];
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i].split(" ");
      if (command[0] === "add") {
        let index = +command[1];
        let element = +command[2];
        result.splice(index, 0, element);
      }
      if (command[0] === "addMany") {
        let index = command[1];
        let newArray = command.slice(2).map(Number);
        result.splice(index, 0, ...newArray);
      }
      if (command[0] === "contains") {
        let element = +command[1];
        let index = result.indexOf(element);
        console.log(index);
      }
      if (command[0] === "remove") {
        let index = +command[1];
        result.splice(index, 1);
      }
      if (command[0] === "shift") {
        let rotations = +command[1];
        for (let j = 0; j < rotations; j++) {
          let element = result.shift();
          result.push(element);
        }
      }
      if (command[0] === "sumPairs") {
        if (result.length % 2 === 0) {
          for (let k = 0; k < result.length; k += 2) {
            output.push(result[k] + result[k + 1]);
          }
        } else {
          for (let k = 0; k < result.length - 1; k += 2) {
            output.push(result[k] + result[k + 1]);
          }
          output.push(result.pop());
        }
        result = output;
        output = [];
      }
      if (command[0] === "print") {
        console.log("[ " + result.join(", ") + " ]");
      }
    }
  }
 
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']   
)
