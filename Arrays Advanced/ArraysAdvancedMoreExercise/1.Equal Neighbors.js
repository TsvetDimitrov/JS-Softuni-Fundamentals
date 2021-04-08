// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as array of arrays, containing string elements (2D matrix of strings).
// The output is return value of you function. Save the number of equal pairs you find and return it.

function equalNeighbors(args) {
    let counter = 0;
    for (let index = 0; index < args.length - 1; index++) {
        for (let j = 1; j < args[index].length; j++) {
            if (args[index][j] == args[index + 1][j]) {
                counter++;
            }
            if (args[index][j] == args[index][j - 1]) {
                counter++;
            }
        }
    }

    for (let index = 0; index < args[args.length - 1].length; index++) {
        if (args[args.length - 1][index] == args[args.length - 1][index + 1]) {
            counter++;
        }
    }
    for (let index = 0; index < args.length - 1; index++) {
        if (args[index][0] == args[index + 1][0]) {
            counter++;
        }
    }
    console.log(counter)
}


equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

equalNeighbors([
['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']
]);
