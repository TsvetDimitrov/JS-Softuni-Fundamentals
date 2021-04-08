// You will be given an encoded message and a template matrix for decoding it. The decoding is done by overlaying the template on top of 
// the stone with the message and performing an arithmetic operation with the numbers that overlap. 
// Each pair of numbers (one from the message and one from the template matrix) is added together and the resulting 
// number is located on the wheel of letters (pictured to the right), by counting from the beginning (zero) and going clockwise.
// You may count more than one full revolution around the wheel (e.g. 6 is the same as 33 and so on). 
// Repeat this process for all symbols of the message.
// If the decoding template matrix is smaller than the message, shift the template horizontally by as many cells as it is wide, 
// so it covers the next section of the message (see example). Once you reach the last column of the message matrix, 
// if there are more rows left, shift the template back to the first column, but offset it vertically by as many cells as it is high. 
// See the example’s explanation for more information.
// Input
// You will receive an array of strings. The first element represents a number n, which is the length of the template matrix for decoding.
//  The next n elements represent rows in the decoding template matrix, with columns separated by space. 
//  The rest of the elements are all rows of the encoded message matrix, with columns in each row separated by space.
// Output
// Print the decoded message in uppercase on a single line on the console. The final message is joined from all resulting cells,
//  starting from top left, going right, row by row. Trailing spaces are ignored.




// NOTE THE TASK IS WITH 66/100 POINTS! 
function rosettaStone(arr) {
    let rowsTemplate = Number(arr[0]);
    let templateMatrix = [];
    let templateCol = 0;
    let counter = 0;
    for (let i = 1; i <= rowsTemplate; i++) {
        counter++;
        templateMatrix.push(arr[i].split(' ').map(Number));
    }
    templateCol += counter;
    counter = 0;
    let messageMatrix = [];
    let messageCol = 0;
    for (let i = rowsTemplate + 1; i < arr.length; i++) {
        counter++;
        messageMatrix.push(arr[i].split(' ').map(Number));
    }
    messageCol += counter;
    counter = 0;
    //fill the overlap matrix:
    let matrix = messageMatrix;
    let outputMessage = '';
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            matrix[row][col] += templateMatrix[row % rowsTemplate][col % templateCol];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let num = matrix[i][j] % 27;
            if (num != 0) {
                matrix[i][j] = String.fromCharCode(num + 64);
            } else {
                matrix[i][j] = ' ';
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            outputMessage += matrix[i][j];
        }
    }
    console.log(outputMessage);
}

rosettaStone([
    `1`,
    `1 3 13`,
    `12 22 14 13 25 0 4 24 23`,
    `18 24 2 25 22 0 0 11 18`,
    `8 25 6 26 8 23 13 4 14`,
    `14 3 14 10 6 1 6 16 14`,
    `11 12 2 10 24 2 13 24 0`,
    `24 24 10 14 15 25 18 24 12`,
    `4 24 0 8 4 22 19 22 14`,
    `0 11 18 26 1 19 18 13 15`,
    `8 15 14 26 24 14 26 24 14`]);


// rosettaStone([
//     '2',
//     '31 32',
//     '74 37',
//     '19 0 23 25',
//     '22 3 12 17',
//     '5 9 23 11',
//     '12 18 10 22'
//   ])