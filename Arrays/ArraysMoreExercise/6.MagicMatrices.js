// Write a function that checks if a given matrix of numbers is magical. 
// A matrix is magical if the sums of the cells of every row and every column are equal. 
// Input
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// Output
// The output is a Boolean result indicating whether the matrix is magical or not.


function isMagicMatrix(matrix) {
    let sumRow = row => matrix[row].reduce((a, b) => a + b);
    let sumCol = col => matrix.map(row => row[col])
        .reduce((a, b) => a + b);
 
    if (matrix.length > 0) {
        let targetSum = sumRow(0);
 
        for (let i = 1; i < matrix.length; i++) {
            let rowSum = sumRow(i);
            if (rowSum !== targetSum) {
                return false;
            }
        }
 
        for (let j = 0; j < matrix[0].length; j++) {
            let colSum = sumCol(j);
            if (colSum !== targetSum) {
                return false;
            }
        }
    }
 
    return true;
}




isMagicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );